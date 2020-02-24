import React, {Component}from 'react'
import axios from 'axios'

class AuthenticatedComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            user: undefined
        }
    }


    jwtFunction(){
        const getJwt = () =>{
           return localStorage.getItem("jwt")
        }

        const jwr = getJwt();

        if(!jwt){
            this.props.history.push('/Login')
        }
        axios.get('/getUser', { headers: { "auth-token": jwt } }).then( res => res.setState({
            
            user = res.data
        })).catch(err => {
            localStorage.removeItem()
            this.props.history.push('/Login')
        } )
    }



    render() { 
        if(this.state.user == undefinied){
            return(
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        return(
            <div>
                hELLO WORD
            </div>
        );
    }
}

export default AuthenticatedComponent