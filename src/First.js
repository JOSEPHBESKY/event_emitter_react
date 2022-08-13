import React, { Component } from 'react'

export default class First extends Component {
    constructor (props){
        super(props)
        this.state={

        }
    }
    handlechange=(e)=>{
        this.setState([ e.target.value])
    }
    transfer=()=>{
        this.props.receivedata (this.state.value)
    }
  render() {
    return (
      <div>
      <input value={this.state.value} onChange={this.handlechange}/>
      <button onClick={this.transfer}>click</button>
      </div>
    )
  }
}
