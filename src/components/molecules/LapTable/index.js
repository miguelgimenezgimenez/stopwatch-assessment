import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatElapsedTime } from '../../../helpers/formatElapsedTime'
import './style.scss'

class LapTable extends Component {
  render () {
    if (!this.props.lapTimeMainTime.length) return null

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
const mapStateToProps = state => ({
  lapTimeMainTime: state.present.timeRecords.lapTimeMainTime
})
export default connect(mapStateToProps)(LapTable)
