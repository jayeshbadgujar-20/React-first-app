import React, { Component } from 'react'

class EventClass extends Component {
    clickHandler(){
        console.log("This is EventClass");
    }
  render() {
    
    return (
        <>
      <div>
        EventClass
      </div>
      <button onClick={this.clickHandler}>Click Me</button>
      </>
    )
  }
}

export default EventClass