import React from "react";
import ReactDOM from "react-dom";
import style from './style.scss'
import StopWatchContainer from './components/organisms/StopWatchContainer'

const App = () => {
    
    return (
        <div>
          <StopWatchContainer/>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));