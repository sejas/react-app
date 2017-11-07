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
  Button,
  Linking
} from 'react-native'


export default class SettingsScreen extends Component {
  static propTypes = {}
  state = {}
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Created by
        </Text>
        <Button style={styles.text}
          title="Antonio Sejas"
          onPress={ ()=>{ Linking.openURL('https://sejas.es')}}
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
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});
