import React, { Component } from 'react'
import { formatElapsedTime } from '../../../helpers/formatElapsedTime'

export default class LapTimes extends Component {
  render () {
    return (
      <div >
        {this.props.times.map(time => (
          <div key={time[1]}>
            <div>
              {formatElapsedTime(time[0])}
            </div>
            <div>
              {formatElapsedTime(time[1])}
            </div>
          </div>))
        }
      </div>
    )
  }
}
