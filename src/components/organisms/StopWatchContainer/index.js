import React, { Component } from 'react'

import Timer from '../../molecules/Timer'
import style from './style.scss'
import LapTable from '../../molecules/LapTable'

export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: false,
      mainTimerReset: false,
      lapStart: false,
      /* this variable is called lapTimeMainTime that because its a 2 dimension array (i dont really like the name)
      which will have an array with the lapTime and maintime in each position of the outter array */
      lapTimeMainTime: [],
      record: false,
      startButtonLabel: 'Start'
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.start !== this.state.start) {
      const startButtonLabel = this.state.start ? 'Stop' : 'Resume'
      this.setState({ startButtonLabel })
    }
  }

  toggleState (type) {
    this.setState({ [type]: !this.state[type] })
  }

  storeTime (lapTime) {
    const { lapTimeMainTime } = this.state
    let mainTime = 0
    if (lapTimeMainTime.length) [, mainTime] = lapTimeMainTime[lapTimeMainTime.length - 1]
    // here i create a 2 dimension array where i will store laptimes, and  mainTime(by adding laptimes)
    this.setState({ lapTimeMainTime: [...this.state.lapTimeMainTime, [lapTime, mainTime + lapTime]] })
  }

  reset () {
    this.setState({
      mainTimerReset: !this.state.mainTimerReset,
      lapStart: !this.state.lapStart,
      lapTimeMainTime: [] })
  }

  render () {
    const {
      start,
      mainTimerReset,
      lapStart,
      lapTimeMainTime
    } = this.state

    return (
      <div className={style.container}>

        <div className={style.mainTimer} >
          <Timer
            start={start}
            reset={mainTimerReset}
          />
        </div>

        <div className={style.lapTimer}>
          <Timer
            start={start}
            reset={lapStart}
            lapTimer
            storeTime={time => this.storeTime(time)}
          />
        </div>

        {this.state.lapTimeMainTime.length > 0 && <LapTable lapTimeMainTime={lapTimeMainTime} />}

        <button
          onClick={() => this.toggleState('start')}
        >
          {this.state.startButtonLabel }
        </button>

        {
          this.state.startButtonLabel === 'Stop' &&
          <button onClick={() => this.toggleState('lapStart')} >
           Lap
          </button>
        }

        {
          this.state.startButtonLabel === 'Resume' &&
          <button onClick={() => this.reset()} >  Reset
          </button>
        }

      </div>
    )
  }
}
