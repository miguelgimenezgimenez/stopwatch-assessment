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
    if (!nextProps.start && this.props.start) this.stop()
    if (this.props.reset !== nextProps.reset) this.reset()
    if (this.props.lap !== nextProps.lap) this.lap()
  }

  lap () {
    const { time } = this.state
    this.props.storeTime(time)
    if (this.props.lapTimer && this.props.start) {
      this.stop()
      this.setState({ time: 0 })
      this.start()
    }
  }

  reset () {
    this.setState({ time: 0 })
  }

  start () {
    this.intervalId = setInterval(() => this.setState(state => ({ time: state.time + 10 })), 10)
  }

  stop () {
    clearInterval(this.intervalId)
  }

  componentWillUnmount () {
    this.stop()
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
