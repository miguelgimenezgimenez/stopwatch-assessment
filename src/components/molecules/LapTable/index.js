import React, { Component } from 'react'

import { formatElapsedTime } from '../../../helpers/formatElapsedTime'
import './style.scss'

export default class LapTable extends Component {
  render () {
    return (
      <table >
        <tbody>
          {this.props.lapTimeMainTime.map(([lapTime, mainTime], index) => (
            <tr key={mainTime}>
              <td>{String(index).padStart(2, 0)}</td>
              <td>
                {formatElapsedTime(lapTime)}
              </td>
              <td>
                {formatElapsedTime(mainTime)}
              </td>
            </tr>))
          }
        </tbody>
      </table>
    )
  }
}
