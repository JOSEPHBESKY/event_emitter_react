import React, { Component } from 'react';

export default class App extends Component {
  state={
    name:this.props.initialName,
    color:'red'
  }
  change(e){
    if(name='changecolor'){
      this.setState({color:'red'});
    }
    this.setState({name:e.target.value})
  }
  render() {
    const {name,color}=this.state
    return (
      <div>
      name:<input value={name}onChange={this.change.bind(this)}/>
      <button style={{backgroundColor:color}}>click</button>
      </div>
    )
  }
}
