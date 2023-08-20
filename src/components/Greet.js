import React from 'react'

function Greet( props ,name ,city) {
  return (
    <div>
      <h1>Hello My name is  {props.name} and i am from {props.city}</h1>
      <h2> </h2>
    </div>
  )
}

export default Greet