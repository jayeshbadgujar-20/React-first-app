import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props){
        super(props)

        this.state = {
            msg : "Hello, Jayesh"
        }
        console.log(this)

        // this.clickHandler = this.clickHandler.bind(this)
     }
     clickHandler= () =>{
        this.setState({
            msg : "This is 4th Way"
        })
    }

    // clickHandler(){
    //     this.setState ({
             // msg : "This is 1st Way"
             // msg : "This is 2nd Way"
             // msg : "This is 3rd Way"
    //     })
        
    
  render() {
    return (
        <>
      <div>
        EventBinding
      </div>
      <h1>{this.state.msg}</h1>
      {/* <button onClick={this.clickHandler.bind(this)}>Click to Change</button> */}
      {/* <button onClick={() => this.clickHandler()}>Click to Change</button> */}
      {/* <button onClick={this.clickHandler}>Click to Change</button> */}
      <button onClick={this.clickHandler}>Click to Change</button>

      </>
    )
  }
}

export default EventBinding