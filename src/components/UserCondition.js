import React, { Component } from 'react'

class UserCondition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logInn: true
        }
    }

    render() {

        // if (this.state.logInn) {
        //     return <div>Usercondition Statement</div>
        // } else {
        //     return <div>Hello World..!</div>
        // }



        //  if (!this.state.logInn) {
        //     return<div>This is false Statement</div>
        //  } else {
        //     return <div>This is true Statement</div>
        //  }




        // let text;
        // if (this.state.logInn) {
        //    text = <h2>UserConditional Statement</h2>
        // } else {
        //    text = <h2>Hello World.....</h2>
        // }
        // return(<h1>{text}</h1>)




        // return (this.state.logInn)
        // ? ( <h2>UserConditional Statement</h2>)
        // : ( <h2>Hello World.....</h2>)
           

         
         return this.state.logInn && <h2>Login Successfull..!</h2>






    }
}

export default UserCondition
