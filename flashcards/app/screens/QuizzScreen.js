/**
 * Antonio Sejas
 * antonio@sejas.es
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import Question from '../components/Question'

class QuizzScreen extends Component {
  static propTypes = {}
  state = {
    current : 0,
    correct: [],
    incorrect: []
  }
  componentDidMount() {}

  isCorrect = index => () => {
    this.setState({correct:[...this.state.correct, index], current: this.state.current+1})
  }
  isIncorrect = index => () => {
    this.setState({incorrect:[...this.state.correct, index], current: this.state.current+1})
  }



  render() {
    const {questions} = this.props
    const {current, correct, incorrect} = this.state
    const showFinalResult = current >= (questions.length)
    return (
      <View style={styles.container}>
        {!showFinalResult && <View style={styles.pageNumber}>
           <Text style={styles.pageNumberText}>
             Question {current+1}/{questions.length}
           </Text>
        </View>}
        {questions.map((q, index) => {
          return current === index
          ? <Question key={index} question={q} isCorrect={this.isCorrect(index)} isIncorrect={this.isIncorrect(index)}/>
          : null
        })}
        {showFinalResult &&
          <View style={styles.container}>
            <Text>
              Completed
            </Text>
            <Text>
              Result: {Math.round(correct.length* 100/questions.length)}%
            </Text>

          </View>
        }
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
  pageNumber: {
    marginTop: 30,
  }
});

function mapStateToProps({decks}, props) {
  return {
    questions: decks[props.navigation.state.params.deckId].questions
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
)(QuizzScreen)