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
  Text,
  Button
} from 'react-native'
import Question from '../components/Question'
import NotificationsService from '../services/NotificationsService'

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
    this.checkIfIsFinishedAndCancelNotifications()
  }
  isIncorrect = index => () => {
    this.setState({incorrect:[...this.state.correct, index], current: this.state.current+1})
    this.checkIfIsFinishedAndCancelNotifications()
  }

  checkIfIsFinishedAndCancelNotifications = () => {
    const {questions} = this.props
    if (this.state.current >= questions.length) {
      NotificationsService.clearLocalNotification()
      .then(NotificationsService.setLocalNotification)
    }
  }

  goBack = ()=>{
    const {navigation} = this.props
    navigation.goBack()
  }
  restart = ()=>{
    //restart state
    this.setState(state=>({
      current : 0,
      correct: [],
      incorrect: []
    }))
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

            <Button
              title="Go Back"
              onPress={this.goBack}
            />
            <Button
              title="Restart Quizz"
              onPress={this.restart}
            />

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