import React, { Component } from 'react'
import { formatElapsedTime } from '../../../helpers/formatElapsedTime'

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
    this.intervalId = setInterval(() => this.setState(state => ({ time: state.time + 10 })), 10)
  }

  reset () {
    /* storing the time in a variable is not necessary,
    since the state wont be updated until the end of the function */
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
