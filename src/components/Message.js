import React, { Component } from 'react'

class Message extends Component {
  constructor(props){
    super(props);
      this.state = {
        msg: "Welcome to ReactJs"
      }
      
      this.Clickme = this.Clickme.bind(this)

    }
    Clickme(){
      this.setState({
        msg: "This is ReactJs Tutorial"
      })
    }
  render() {
    return (
      <>
        <h1>Wellcome</h1>
        <p>{this.state.msg}</p>

        <button onClick= {this
        .Clickme}>Change</button>
      </>
    )
  }
  }


export default Message