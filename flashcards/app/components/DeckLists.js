/**
 * Antonio Sejas
 * antonio@sejas.es
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import Deck from './Deck'

class DeckLists extends Component {
  static propTypes = {}
  state = {}
  componentDidMount() {}
  goToDeck = (deckId) => {
    const {navigation, decks} = this.props
    const deck = decks[deckId]
    navigation.navigate('DeckDetailScreen', {deckId})
  }
  render() {
    const {decks} = this.props
    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map(deckId => (
          <TouchableOpacity key={deckId} onPress={()=>(this.goToDeck(deckId))}>
            <Deck deckId={deckId} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



function mapStateToProps({decks}) {
  return {
    decks
  }
}
const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
  },
  dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckLists)