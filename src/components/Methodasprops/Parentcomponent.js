import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

 class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        ParentName :"John"
      }
      this.parentOne = this.parentOne.bind(this)
    }
  parentOne(childdata){
    alert(`Hello ${this.state.ParentName} from ${childdata}`)
    // alert("Hello" + this.state.ParentName)
  }  
  render() {
    return (
        <>
      <div>
        <Childcomponent Parenthandler= {this.parentOne} />
        
      </div>

      </>
    )
  }
}

export default Parentcomponent