import React, { Component } from 'react'
import Timer from '../../Timer'
import style from './style.scss'
import LapTimes from '../../Molecules/LapTimes'

export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: false,
      mainTimerReset: false,
      lapStart: false,
      lapTimes: [],
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

  storeTime (time) {
    const { lapTimes } = this.state
    let prevTime = 0
    if (lapTimes.length) [, prevTime] = lapTimes[lapTimes.length - 1]

    this.setState({ lapTimes: [...this.state.lapTimes, [time, prevTime + time]] })
  }

  reset () {
    this.setState({
      mainTimerReset: !this.state.mainTimerReset,
      lapStart: !this.state.lapStart,
      lapTimes: [] })
  }

  render () {
    const {
      start,
      mainTimerReset,
      lapStart,
      lapTimes
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

        {this.state.lapTimes.length > 0 && <LapTimes times={lapTimes} />}

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
