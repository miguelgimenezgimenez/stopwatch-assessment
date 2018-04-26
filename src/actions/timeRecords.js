export const storeTime = (dispatch, lapTime) => {
  dispatch({ type: 'TIME_RECORDS_SET', lapTime })
}

export const reset = (dispatch) => {
  dispatch({ type: 'TIME_RECORDS_RESET' })
}
