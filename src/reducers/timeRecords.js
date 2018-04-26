const INITIAL_STATE = {

  /* this variable is called like that because its a 2 dimension array
  which will have an array with the lapTime and maintime in each position of the outter array */
  lapTimeMainTime: [],
  error: null
}

const setTime = (state, lapTime) => {
  let mainTime = 0
  if (state.lapTimeMainTime.length) {
    [, mainTime] = state.lapTimeMainTime[state.lapTimeMainTime.length - 1]
  }
  // I could have used object spreaad plugin and  object spread operator.
  // here i create a 2 dimension array where i will store laptimes, and  mainTime(by adding laptimes)
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
