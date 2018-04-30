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

  componentDidUpdate (prevProps) {
    if (this.props.start && !prevProps.start) this.start()
    if (!this.props.start && prevProps.start) this.stop()
    if (prevProps.reset !== this.props.reset) this.reset()
    if (prevProps.lap !== this.props.lap) this.lap()
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
    /* I have used functional set state since i believe its good practice when dealing with previous states */
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
