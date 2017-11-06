/**
 * Antonio Sejas
 * antonio@sejas.es
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard
} from 'react-native'
import {addDeck} from '../reducers/decks'



class AddDeckScreen extends Component {
  static propTypes = {}
  state = {
    title: ''
  }
  componentDidMount() {}
  addDeck = () => {
    const {addDeck, navigation} = this.props
    const deckId = addDeck(this.state.title)
    Keyboard.dismiss()
    // navigation.navigate('DeckListScreen')
    navigation.navigate('DeckDetailScreen', {deckId})
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'position'}>
        <Text style={styles.title}>
          How will you call your new Deck?
        </Text>
        <TextInput
                style={styles.input}
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}
              />
        <Button
          style={styles.button}
          onPress={this.addDeck}
          title="Save Deck" />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input : {
    marginLeft: (Dimensions.get('window').width-230)/2,
    height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 30,},
  button: {
    fontSize: 20,
    marginTop: 30
  }
});



function mapStateToProps({decks}) {
  return {
  }
}
const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    addDeck,
  },
  dispatch
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeckScreen)