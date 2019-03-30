import * as actionTypes from './actions';

let initialState = {
  test: false
}

export default storage = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SET:
          return { ...state, ...action.payload }
      case actionTypes.CLEAN:
          return initialState
      default:
          return state
  }
}
