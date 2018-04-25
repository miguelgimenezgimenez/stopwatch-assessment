import React, { Component } from 'react'
import { formatElapsedTime } from '../../helpers/formatElapsedTime'

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time:0,
        }
        this.intervalId = ''
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.start && !this.props.start)  this.start()
        if(!nextProps.start && this.props.start)  this.stop()
        if(nextProps.reset && !this.props.reset)  this.reset()
    }
    
    start() {
        this.intervalId = setInterval(()=>this.setState({ time:this.state.time + 10 }), 10)
    }

    stop(){
        clearInterval(this.intervalId)
    }
    reset(){
       this.setState({time:0})
    }

    render() {
      
        return (
            <div>
                {formatElapsedTime(this.state.time)}
            </div>
        )
    }
}
