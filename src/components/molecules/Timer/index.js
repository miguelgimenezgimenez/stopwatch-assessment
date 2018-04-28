import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatElapsedTime } from '../../../helpers/formatElapsedTime'
import * as timeRecordsActions from '../../../actions/timeRecords'

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

  reset () {
    /* storing the time in as variable is not necessary,
     since the state wont be updated until the end of the function */
    const { time } = this.state
    this.stop()
    this.setState({ time: 0 })
    if (this.props.lapTimer && this.props.start) {
      timeRecordsActions.storeTime(this.props.dispatch, time)
      this.start()
    }
  }

  start () {
    /* i am using functional set state,
    because I believe its good practice to use it when dealing with previous states */
    this.intervalId = setInterval(() => this.setState(state => ({ time: state.time + 10 })), 10)
  }

  stop () {
    clearInterval(this.intervalId)
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
