import React, { Component } from 'react'

class Counter extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        };

        // this.state = this.count.bind(this)

    }
    counter(){
        this.setState ({
          count : this.state.count  +1
        })
    }
  render() {
    return (
      <>
        {/* <p>{this.state.count}</p> */}
        <h1>Counter-{this.state.count}</h1>
        <button onClick={()=>this.counter()}>Increment</button>
      </>
    )
  }
}

export default Counter