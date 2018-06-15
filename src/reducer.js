import * as actionTypes from './actionTypes.js'
let initialState = {
  total: 0,
  a: 'Hello World!'
}

function count(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ONE:
      return Object.assign({}, state, {
        total: state.total + 1
      })
      break

    case actionTypes.DESC_ONE:
      return Object.assign({}, state, {
        total: state.total - 1
      })
      break

    case actionTypes.ADD_NUM:
      return Object.assign({}, state, {
        total: state.total + action.num
      })

    default:
      return initialState
  }
}

export default count