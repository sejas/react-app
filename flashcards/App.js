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

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(thunk),
  )
  // applyMiddleware(thunk),
)

store.subscribe(() => {
  const {decks} = store.getState()
  if (decks && decks != {}) {
    console.log('store.subscribe',JSON.stringify(decks))
    // AsyncStorage.setItem(STORE_STORAGE, JSON.stringify(decks))
    try {
      AsyncStorage.setItem(STORE_STORAGE, JSON.stringify(decks)).then(s=>{
        console.log('saved',s)
        AsyncStorage.getItem(STORE_STORAGE).then(decks=>{
          console.log('reading if decks were saved',decks)
        })
      })
    } catch (error) {
      console.log(error)
      console.warn(error)
    }

    // try {
    //   const value = await AsyncStorage.getItem(STORE_STORAGE);
    //   if (value !== null){
    //     // We have data!!
    //     console.log(value);
    //   }
    // } catch (error) {
    //   console.log(error)
    //   console.warn(error)
    // }

  }
})


export default class App extends React.Component {
  render() {
    console.log('this.props App',this.props)
    return (
      <Provider store={store}>
        <DeckStack />
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
  CardsListScreen: { screen: screens.CardsListScreen },
})