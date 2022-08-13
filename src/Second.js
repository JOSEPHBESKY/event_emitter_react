import React, { Component } from 'react'
import Second from './Second'
export class Second extends Component {
    constructor(){
        super()
        this.state={
            data:null
        }
    }
    receivedata=(data)=>{
      this.setState([data])
    }
  render() {
    return (
      <div>
      <Second name={this.state.value} receivedata={this.transfer} />
      {this.state.data}
      </div>
    )
  }
}

export default Second