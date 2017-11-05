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
  Text
} from 'react-native'
import Deck from './Deck'

class DeckLists extends Component {
  static propTypes = {}
  state = {}
  componentDidMount() {}

  render() {
    const {decks} = this.props
    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map(deckId => (
          <Deck key={deckId} deckId={deckId} deck={decks[deckId]} />
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