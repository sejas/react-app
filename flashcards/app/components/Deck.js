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


export default class Deck extends Component {
  static propTypes = {}
  state = {}
  componentDidMount() {}
  nCards = ()=>{
    const {deck} = this.props
    const hasS = deck.questions.length === 1 ?'':'s'
    return `${deck.questions.length} card${hasS}`
  }
  render() {
    const {deck} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {deck.title}
        </Text>
        <Text style={styles.count}>
          {this.nCards()}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    width: 200,
    marginBottom: 60,
    backgroundColor: '#EEE'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  count: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
  }
});
