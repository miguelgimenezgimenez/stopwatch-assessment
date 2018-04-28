import React, { Component } from 'react'

import Timer from '../../molecules/Timer'
import style from './style.scss'
import LapTable from '../../molecules/LapTable'

export default class StopWatchContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: false,
      reset: false,
      lapStart: false,
      lapTime: [],
      mainTime: [],
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

  storeTime (time, type) {
    const recordedTimes = [...this.state[type], time]
    this.setState({ [type]: recordedTimes })
  }

  reset () {
    this.setState({
      reset: !this.state.reset,
      lapTime: [],
      mainTime: [] })
  }

  render () {
    const {
      start,
      reset,
      lapStart,
      lapTime,
      mainTime
    } = this.state

    return (
      <div className={style.container}>

        <div className={style.mainTimer} >
          <Timer
            start={start}
            reset={reset}
            lap={lapStart}
            storeTime={time => this.storeTime(time, 'mainTime')}
          />
        </div>

        <div className={style.lapTimer}>
          <Timer
            start={start}
            reset={reset}
            lap={lapStart}
            lapTimer
            storeTime={time => this.storeTime(time, 'lapTime')}
          />
        </div>

        {this.state.lapTime.length > 0 && <LapTable lapTime={lapTime} mainTime={mainTime} />}

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
