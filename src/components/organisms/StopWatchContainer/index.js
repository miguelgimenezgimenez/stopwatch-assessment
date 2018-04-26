
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Timer from '../../molecules/Timer'
import style from './style.scss'
import LapTable from '../../molecules/LapTable'
import * as timeRecordsActions from '../../../actions/timeRecords'
import * as historyActions from '../../../actions/history'

class StopWatchContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: false,
      mainTimerReset: false,
      lapStart: false,
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

  history (type) {
    historyActions[type](this.props.dispatch)
  }

  toggleState (type) {
    this.setState({ [type]: !this.state[type] })
  }

  reset () {
    const { mainTimerReset, lapStart } = this.state

    this.setState({
      mainTimerReset: !mainTimerReset,
      lapStart: !lapStart
    })

    timeRecordsActions.reset(this.props.dispatch)
  }

  render () {
    const {
      start,
      mainTimerReset,
      lapStart
    } = this.state

    return (
      <div className={style.container}>
        <button onClick={() => { this.history('undo') }} > Undo </button>
        <button onClick={() => { this.history('redo') }}> Redo </button>

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
          />
        </div>

        <LapTable />

        <button
          onClick={() => this.toggleState('start')}
        >
          {this.state.startButtonLabel}
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

      </div >
    )
  }
}
export default connect()(StopWatchContainer)
