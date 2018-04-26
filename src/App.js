import React from 'react'
import ReactDOM from 'react-dom'
import StopWatchContainer from './components/organisms/StopWatchContainer'

const App = () => (
  <div>
    <StopWatchContainer />
  </div>
)
export default App
ReactDOM.render(<App />, document.getElementById('app'))
