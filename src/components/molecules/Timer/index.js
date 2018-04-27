import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatElapsedTime } from '../../../helpers/formatElapsedTime'
import * as timeRecordsActions from '../../../actions/timeRecords'

function increaseTime (state, props) {
  return { time: state.time + 10 }
}

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
    this.intervalId = ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.start && !this.props.start) this.start()
    if (!nextProps.start && this.props.start) this.stop()
    if (this.props.reset !== nextProps.reset) this.reset()
  }

  start () {
    this.intervalId = setInterval(() => this.setState(increaseTime), 10)
  }

  stop () {
    clearInterval(this.intervalId)
  }

  reset () {
    const { time } = this.state
    this.stop()
    this.setState({ time: 0 })
    if (this.props.lapTimer && this.props.start) {
      timeRecordsActions.storeTime(this.props.dispatch, time)
      this.start()
    }
  }

  componentWillUnmount () {
    this.stop()
  }

  render () {
    return (
      <div>
        {formatElapsedTime(this.state.time)}
      </div>
    )
  }
}

// The component is connected so that dispatch is passed to it.
export default connect()(Timer)
