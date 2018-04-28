import React, { Component } from 'react'

import { formatElapsedTime } from '../../../helpers/formatElapsedTime'
import './style.scss'

export default class LapTable extends Component {
  render () {
    return (
      <table >
        <tbody>
          {this.props.lapTime.map((lapTime, index) => (
            <tr key={this.props.mainTime[index]}>
              <td>{String(index).padStart(2, 0)}</td>
              <td>
                {formatElapsedTime(lapTime)}
              </td>
              <td>
                {formatElapsedTime(this.props.mainTime[index])}
              </td>
            </tr>))
          }
        </tbody>
      </table>
    )
  }
}
