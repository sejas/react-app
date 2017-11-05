/**
 * Antonio Sejas
 * antonio@sejas.es
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native'
import {loadDecks} from '../reducers/decks'
import DeckLists from '../components/DeckLists'


class DeckListScreen extends Component {
  static propTypes = {}
  state = {}
  componentWillMount() {
    this.props.loadDecks()
  }

  render() {
    const {decks, navigation} = this.props
    return (
      <View style={styles.container}>
        {decks && Object.keys(decks).length > 0
          ?(
            <DeckLists />
           )
          :(<View>
            <Text style={styles.text}>
              We didn't find any deck.
            </Text>
            <Text style={styles.text}>
              Please consider to add new one.
            </Text>
            <Button
              onPress={()=>{navigation.navigate('AddDeckScreen')}}
              title="Create new deck" />
          </View>)}
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
    textAlign: 'center',
    fontSize: 20,
  }
});



function mapStateToProps({decks}) {
  return {
    decks
  }
}
const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    loadDecks,
  },
  dispatch
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListScreen)