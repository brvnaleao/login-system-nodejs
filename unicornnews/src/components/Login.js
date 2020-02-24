import React, {Component} from 'react';
import loginImg from "../images/login.svg";
import './style.scss';
import axios from 'axios'

import { withRouter} from 'react-router-dom'
class Login extends Component{
    constructor(props){
        super(props);

        this.state ={
            
            email:'',
            password :''
        }

        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    change(e){
        this.setState({
           [ e.target.name]: e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        debugger
        axios.post('http://localhost:3000/api/user/Login',{
            password: this.state.password,
            email: this.state.email
          
            }).then(res => {
                
                localStorage.setItem('jwt', res.data);
                this.props.history.push('/AuthenticatedComponent');
            
            })
    }


    render(){
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}></img>
                    </div>
                    <div className="form">
                        <form onSubmit={e => this.submit(e)}>
                            <div className="form-group">
                                <label htmlFor="email">E-mail: </label>
                                <input type="text" name="email" onChange={ e => this.change(e)} palceholder="Your E-mail" value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass">Password: </label>
                                <input type="password" name="password"  onChange={ e => this.change(e)} value={this.state.password}/>
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn" >Login</button>
                                </div>
                        </form>
                    </div>

                </div>
            </div>

        
        )
    }

}
export default withRouter(Login)