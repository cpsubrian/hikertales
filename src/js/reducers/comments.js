import {
  COMMENTS_ADD,
  COMMENTS_LIKE
} from '../actions'

const initialState = [
  {
    name: 'Cartman',
    message: 'Hey you guys!',
    likes: 0
  },
  {
    name: 'Kenny',
    message: '[unintellible sounds coming from hoodie]',
    likes: 0
  }
]

const reducers = {

  [COMMENTS_ADD]: (state, {comment}) => {
    return state.concat(comment)
  },

  [COMMENTS_LIKE]: (state, {index}) => {
    return [
      ...state.slice(0, index),
      {...state[index], likes: state[index].likes + 1},
      ...state.slice(index + 1)
    ]
  }
}

export default function (state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }
  return state
}
