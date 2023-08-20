import React from 'react'

function Childcomponent(props) {
  return (
    <>
    <div>
      Childcomponent
    </div>
    <button onClick={props.Parenthandler('Childcomponent')}>Click Me</button>
    </>
  )
}

export default Childcomponent