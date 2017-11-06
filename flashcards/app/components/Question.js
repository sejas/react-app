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
  Dimensions
} from 'react-native'


export default class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    isCorrect: PropTypes.func.isRequired,
    isIncorrect: PropTypes.func.isRequired,
  }
  state = {
    showQuestion: true,
  }
  componentDidMount() {}

  toggleQuestion = () => {
    this.setState(state => ({
      ...state,
      showQuestion: !state.showQuestion,
    }))
  }

  render() {
    const {question, isCorrect, isIncorrect} = this.props
    const {showQuestion} = this.state
    const questionAnswerText = showQuestion?'Show Answer':'Show Question'
    return (
      <View style={styles.container}>
        {showQuestion
          ?<Text style={styles.question}>
            {question.question}
          </Text>
          :<Text style={styles.question}>
          {question.answer}
          </Text>
        }
        <View style={styles.buttons}>
          <Button
          title={questionAnswerText}
          onPress={this.toggleQuestion} />
          <Button
          title="Correct"
          onPress={isCorrect} />
          <Button
          title="Incorrect"
          onPress={isIncorrect} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    // backgroundColor: '#BBB',
    width: 200,
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width-120
  },
});
