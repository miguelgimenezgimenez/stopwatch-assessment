import React, { Component } from 'react'
import { formatElapsedTime } from '../../helpers/formatElapsedTime'

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
  }

  start () {
    this.intervalId = setInterval(() => this.setState({ time: this.state.time + 10 }), 10)
  }

  stop () {
    clearInterval(this.intervalId)
  }

  reset () {
    this.stop()
    this.setState({ time: 0 })
    console.log(this.props.start)
    if (this.props.lapTimer && this.props.start) {
      this.props.storeTime(this.state.time)
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
