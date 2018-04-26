const INITIAL_STATE = {
  lapTimeMainTime: [],
  error: null
}

const setTime = (state, lapTime) => {
  let mainTime = 0
  if (state.lapTimeMainTime.length) {
    [, mainTime] = state.lapTimeMainTime[state.lapTimeMainTime.length - 1]
  }
  // I could have used object spreaad plugin and  object spread operator
  return Object.assign({}, state, { lapTimeMainTime: [...state.lapTimeMainTime, [lapTime, mainTime + lapTime]] })
}

// same as before
const reset = state => (Object.assign({}, state, { lapTimeMainTime: [] }))

// NOT USED EXPLANATION BELOW
const setError = (state, error) => (Object.assign({}, state, { error }))

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TIME_RECORDS_SET':
      return setTime(state, action.lapTime)
    case 'TIME_RECORDS_RESET':
      return reset(state)
    case 'TIME_RECORDS_ERROR':
      // this isnt being used, i am just putting it in case more changes are added and errors have to be handled
      return setError(state, action.error)
    default:
      return state
  }
}
