import React, { Component } from 'react'
import Timer from '../../Timer/index'
import style from './style.scss'

export default class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mainTimerStart: false,
      mainTimerReset: false
    }
  }

  toggleState (type) {
    this.setState({ [type]: !this.state[type] })
  }

  render () {
    const { mainTimerStart, mainTimerReset } = this.state
    return (
      <div>
        <div className={style.mainTimer} >
          <Timer start={mainTimerStart} reset={mainTimerReset} />
        </div>
        <button onClick={() => this.toggleState('mainTimerStart')} > { mainTimerStart ? 'Stop' : 'Start' } </button>
        <button onClick={() => this.toggleState('mainTimerReset')} >  reset  </button>
      </div>
    )
  }
}
