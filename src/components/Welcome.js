import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const { name, courseName } = this.props;
    return (
      <div>This Wellcome Class Component
        <h1>Hello, my name is {name} and my cousrse is {courseName}</h1>

      </div>
    )
  }
}

export default Welcome

