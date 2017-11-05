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


export default class SettingsScreen extends Component {
  static propTypes = {}
  state = {}
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>
          SettingsScreen
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
