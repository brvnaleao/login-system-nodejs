
import React from 'react'
import Login from './Login.js'
import Register from './Register.js'
import './style.scss';


class Registration extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            isloginActive: true,
        }
      }
    render() { 
        const {isloginActive} = this.state;
        const current = isloginActive ? "Register" : "Login";
        const currentActive = isloginActive ? "login" : "register";
        
        return(
            
            <div className="aaa">
                <div className="login"> 
                    <div className="container">
                         
                         <Register/>
                    </div>  
                    {/* <RightSide current={current} containerRef={ref => this.RightSide = ref}/>  */}
                </div>
            </div>
        );
    }
}

export default Registration