/**
 * Antonio Sejas
 * antonio@sejas.es
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'


export default class CardsListScreen extends Component {
  static propTypes = {}
  state = {}
  componentDidMount() {}

  render() {
    const {deck, deckId} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text>
          {JSON.stringify(deck)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
