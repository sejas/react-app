import { Notifications, Permissions } from 'expo'
import {AsyncStorage} from 'react-native'
import {NOTIFICATION_KEY} from '../constants'

const createNotification = () => {
    return {
      title: 'Remember to study!',
      body: "Hi!, remember to study today. Please, make one quizz to improve yourself 💪!",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }

const notification_hours = 20
const notification_minutes = 00

const NotificationsService = {
  clearLocalNotification: () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  ,setLocalNotification: () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(notification_hours)
                tomorrow.setMinutes(notification_minutes)

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }
}
const _this = NotificationsService
export default NotificationsService