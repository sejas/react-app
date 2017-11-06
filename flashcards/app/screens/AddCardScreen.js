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
import {addQuestionToDeck} from '../reducers/decks'



class AddCardScreen extends Component {
  static propTypes = {}
  state = {
    question: '',
    answer: '',
  }
  componentDidMount() {}
  addCard = () => {
    const {addQuestionToDeck, navigation} = this.props
    const {deckId} = this.props.navigation.state.params
    const {question, answer} = this.state
    addQuestionToDeck(deckId, {question, answer})
    Keyboard.dismiss()
    navigation.goBack()
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'position'}>
        <Text style={styles.title}>
          Question?
        </Text>
        <TextInput
                style={styles.input}
                onChangeText={(question) => this.setState({question})}
                value={this.state.question} />

        <Text style={styles.title}>
          Answer?
        </Text>
        <TextInput
                style={styles.input}
                onChangeText={(answer) => this.setState({answer})}
                value={this.state.answer}
              />
        <Button
          style={styles.button}
          onPress={this.addCard}
          title="Save Card" />
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
    addQuestionToDeck,
  },
  dispatch
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardScreen)