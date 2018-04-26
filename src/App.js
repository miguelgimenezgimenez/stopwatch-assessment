import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import StopWatchContainer from './components/organisms/StopWatchContainer'
import reducers from './reducers'
import { undoableEnhancer } from './helpers/undoableEnhancer'

const undoableReducers = undoableEnhancer(combineReducers(reducers))

const store = createStore(undoableReducers)

const App = () => (
  <div>
    <Provider store={store}>
      <StopWatchContainer />
    </Provider>
  </div>
)
export default App
ReactDOM.render(<App />, document.getElementById('app'))
