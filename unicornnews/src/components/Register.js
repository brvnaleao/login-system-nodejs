import React, {Component} from 'react';
import './style.scss';
import loginImg from "../images/login.svg"

export default class Register extends Component{
    constructor(props){
        super(props)

        // this.state ={
        //     email ='',
        //     password =''
        // }
    }

    // change(e){
    //     this.setState({
    //        [ e.target.name]: e.target.value
    //     })
    // }


    render(){
        return(
            <div className="base-container" >
                <div className="header">Register</div>
                    <div className="content">
                        <div className="image">
                        <img src={loginImg}></img>
                    </div>
                    <div className="form">
                        <form>
                            <div className="form-group">
                               <label htmlFor="name">E-mail</label>
                                <input type="text" name="name" palceholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">E-mail</label>
                                <input type="text" name="username" palceholder="Your E-mail"/>
                            </div>
                             <div className="form-group">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass"/>
                            </div>

                            <div className="footer">
                                <button type="submit" className="btn">Register</button>
                          </div>
                         </form>
                    </div>
                    
                </div>
               
            </div>
        )
    }

}