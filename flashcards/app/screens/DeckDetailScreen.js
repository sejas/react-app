/**
 * Antonio Sejas
 * antonio@sejas.es
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native'

import Deck from '../components/Deck'


export default class DeckDetailScreen extends Component {
  static propTypes = {}
  state = {}
  componentDidMount() {}
  addCard = () => {
    const {navigation} = this.props
    const {deckId} = navigation.state.params
    navigation.navigate('AddCardScreen', {deckId})
  }
  startQuiz = () => {

  }
  render() {
    const {deck, deckId} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Deck
          deck={deck}
          deckId={deckId}
        />
        <Button
          title={'Add Card'}
          onPress={this.addCard}
        />
        <Button
          title={'Start Quiz'}
          onPress={this.startQuiz}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
