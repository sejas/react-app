import React from 'react'
import {AsyncStorage} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as screens from './app/screens'
import { SimpleLineIcons } from '@expo/vector-icons';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './app/reducers'
import {STORE_STORAGE} from './app/constants'

import { persistStore, persistCombineReducers } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import storage from 'redux-persist/es/storage'


const configPersist = {
  key: STORE_STORAGE,
  storage,
}
const reducersAndPersist = persistCombineReducers(configPersist, reducers)
const store = createStore(
  // combineReducers(reducers),
  reducersAndPersist,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
  // applyMiddleware(thunk),
)
let persistor = persistStore(store)




export default class App extends React.Component {
  render() {
    console.log('this.props App',this.props)
    return (
        <Provider store={store}>
          <PersistGate
              // loading={<Loading />}
              // onBeforeLift={onBeforeLift}
              persistor={persistor}>
              <DeckStack />
           </PersistGate>
        </Provider>
    );
  }
}



const HomeTabs = TabNavigator({
  DeckListScreen: {
    screen: screens.DeckListScreen,
    navigationOptions: {
      header:null,
      title: 'Decks',
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <SimpleLineIcons name='list' size={30} color={tintColor} />
    },
  },
  AddDeckScreen: {
    screen: screens.AddDeckScreen,
    navigationOptions: {
      header:null,
      title: 'New deck',
      tabBarLabel: 'New deck',
      tabBarIcon: ({tintColor}) => <SimpleLineIcons name='plus' size={30} color={tintColor} />
    }
  },
  SettingsScreen: {
    screen: screens.SettingsScreen,
    navigationOptions: {
      header:null,
      title: 'Settings',
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => <SimpleLineIcons name='settings' size={30} color={tintColor} />
    }
  },
},
{
  tabBarPosition: 'bottom',// 'top',
   animationEnabled: true,
   tabBarOptions: {
     activeTintColor: '#0773F8',
   },
})

const DeckStack = StackNavigator({
  // DeckListScreen: { screen: screens.DeckListScreen, navigationOptions:{header:null}},
  HomeTabs: {screen: HomeTabs},
  DeckDetailScreen: { screen: screens.DeckDetailScreen },
  AddCardScreen: { screen: screens.AddCardScreen },
  QuizzScreen: { screen: screens.QuizzScreen },
})