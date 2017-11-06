import {AsyncStorage} from 'react-native'
import slugify from 'slugify'
import {STORE_STORAGE} from '../constants'

// MARK: - DECKS
// Action Constants
const ADD_DECK = 'ADD_DECK'
// const LOADING_DECKS_LOCAL = 'LOADING_DECKS_LOCAL'
// const LOAD_DECKS_LOCAL = 'LOAD_DECKS_LOCAL'

// const loadingDecksAction = () => ({
//   type: LOADING_DECKS_LOCAL,
// })
// const loadDecksAction = decks => ({
//   type: LOAD_DECKS_LOCAL,
//   decks
// })
// export const loadDecks = () => dispatch => {
//   dispatch(loadingDecksAction())
//   AsyncStorage.getItem(STORE_STORAGE).then(decks => {
//     console.log('loadDecks reading decks',JSON.parse(decks))
//     dispatch(loadDecksAction(JSON.parse(decks)))
//   })
// }

const addDeckAction = (key, title) => {
  return {
    type: ADD_DECK,
    key,
    title
  }
}
export const addDeck = title => dispatch => {
    const deckId = slugify(title)
    dispatch(addDeckAction(deckId, title))
    return deckId
}

// MARK: - QUESTIONS
// Action Constants
const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK'

const addQuestionToDeckAction = (deckId, question) => ({
  type: ADD_QUESTION_TO_DECK,
  deckId,
  question
})
export const addQuestionToDeck = (deckId, question) => dispatch => {
  dispatch(addQuestionToDeckAction(deckId, question))
}


const initialState = {
  // THIS IS THE FORMAT ESPECTED
  // React: {
  //   title: 'React',
  //   questions: [
  //     {
  //       question: 'What is React?',
  //       answer: 'A library for managing user interfaces'
  //     },
  //     {
  //       question: 'Where do you make Ajax requests in React?',
  //       answer: 'The componentDidMount lifecycle event'
  //     }
  //   ]
  // },
  // JavaScript: {
  //   title: 'JavaScript',
  //   questions: [
  //     {
  //       question: 'What is a closure?',
  //       answer: 'The combination of a function and the lexical environment within which that function was declared.'
  //     }
  //   ]
  // }
}





export default function authentication(state = initialState, action) {
  switch (action.type) {
    // case LOAD_DECKS_LOCAL:
    //   return action.decks || {}
    case ADD_DECK:
      return {
        ...state,
        [action.key]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_QUESTION_TO_DECK:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [...(state[action.deckId].questions), action.question]
        }
      }
    default:
      return state
  }
}