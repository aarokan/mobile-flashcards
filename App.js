import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import ClearAll from './components/ClearAll'
import Quizz from './components/Quizz'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white, gray, lightGray, lightPurple, lavender } from './utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'



function UdaciStatusBar ({ backgroundColor, ...props }) {
return (
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: "All Decks",
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />,
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: lavender,
      }
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: "Add a Deck",
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />,
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: lavender,
      }
    }
  },
  ClearAll: {
    screen: ClearAll,
    navigationOptions: {
      title: "Clear or Reinitialize",
      tabBarLabel: 'Clear',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='trash' size={30} color={tintColor} />,
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: lavender,
      }
    }
  } 
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck",
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: lavender,
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: "Add a Card",
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: lavender,
      }
    }
  },
  Quizz: {
    screen: Quizz,
    navigationOptions: {
      title: "Quizz",
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: lavender,
      }
    }
  },
})
 
export default class App extends React.Component {

  componentDidMount () {
    if (Platform.OS === 'android') {
      setLocalNotification()
    } 
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>      
      </Provider>

    )
  }
}

