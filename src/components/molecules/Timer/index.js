import React, { Component } from 'react'
import { formatElapsedTime } from '../../../helpers/formatElapsedTime'

function increaseTime (state, props) {
  return { time: state.time + 10 }
}

export default class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
    this.intervalId = ''
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.start && !this.props.start) this.start()
    if (!nextProps.start && this.props.start) clearInterval(this.intervalId)
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
    clearInterval(this.intervalId)
    this.setState({ time: 0 })
    if (this.props.lapTimer && this.props.start) {
      this.props.storeTime(time)
      this.start()
    }
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    const { time } = this.state
    return (
      <div>
        {formatElapsedTime(time)}
      </div>
    )
  }
}
