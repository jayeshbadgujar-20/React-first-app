import React from 'react'
import Details from './Details'
function person({person}) {
    return (
        <>
            <div>person</div>
            <h3>My name is {person.name} My age is {person.age}.
                My id is {person.id} my course is {person.course}</h3>
        </>
    )
}

export default person
