import React, {Component}from 'react'
import axios from 'axios'
import { withRouter} from 'react-router-dom'
import './loggedStyle.scss'

class AuthenticatedComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
        this.jwtFunction();
      }  

    jwtFunction(){
        const getJwt = () =>{
           return localStorage.getItem("jwt")
        }
        
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push('/Login')
        }
        axios.get('http://localhost:3000/api/getUser', { headers: { "auth-token": jwt } }).then( res => this.setState({
            
            user : res.data
        })).catch(err => {
            //localStorage.removeItem()
            this.props.history.push('/Login')
        } )
    }



    render() { 
        if(this.state.user == undefined){
            return(
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        return(

            <div className="div">
                <h1>Hello, visitor</h1>
                <p className="protectedText">Protected content you should only access when you're logged</p>

            </div>
        );
    }
}

export default withRouter (AuthenticatedComponent)


