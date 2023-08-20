import React from 'react'
import Person from './person'
function Details() {
    const persons = [{
        id: 101,
        name: "Jayesh",
        age: 21,
        course: "ReactJS",
    },
    {
        id: 201,
        name: "Shubham",
        age: 23,
        course: "AngularJS",
    },
    {
        id: 301,
        name: "Vijay",
        age: 22,
        course: "NodeJS",
    }]
    const names =["Tejas","Umesh","Nikhil"]
    const personList = persons.map(person =>
        (<Person key={person.id}person ={person}/>)
    )
    const nameList =names.map((name,index)=>(
        <h2 key={index}>{name}</h2>
    ))
    //   const name = ["Jayesh","Shubham","Vijay"]  
    return (
        <>

            <div>{personList}
            {nameList}</div>
    {/*<h3>{name[0]}</h3>
       <h3>{name[1]}</h3>
       <h3>{name[2]}</h3>*/}

        </>
    )

}
export default Details
