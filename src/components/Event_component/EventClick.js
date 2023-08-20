import React from 'react'

function EventClick() {
    function clickHandler(){
        console.log("User Click on the Button");
    }
  return (
    <>
    <div>
      EventClick
    </div>
    <button onClick={clickHandler()}>Click Me</button>
    </>
  )
}

export default EventClick