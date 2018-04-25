import React, { Component } from 'react'
import { formatElapsedTime } from '../../../helpers/formatElapsedTime'
import './style.scss'

export default class LapTimes extends Component {
  render () {
    return (
      <table >
        <tbody>
          {this.props.times.map((time, index) => (
            <tr key={time[1]}>
              <td>{String(index).padStart(2, 0)}</td>
              <td>
                {formatElapsedTime(time[0])}
              </td>
              <td>
                {formatElapsedTime(time[1])}
              </td>
            </tr>))
          }
        </tbody>
      </table>
    )
  }
}
