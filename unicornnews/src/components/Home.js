
import React from 'react'
import Login from './Login.js'
import Register from './Register.js'
import './style.scss';


class Home extends React.Component{

   

    render() { 
        
        
        return(
            
            <div className="aaa">
                <div className="login"> 
                    <div className="container">
                         <Login/>
                      
                    </div>  
                    {/* <RightSide current={current} containerRef={ref => this.RightSide = ref}/>  */}
                </div>
            </div>
        );
    }
}

// const RightSide = props =>{
//     return <div className="right-side" ref={props.containerRef} onClick={props.onClick} onClick>
//         <div className="inner-container ">
//             <div className="text">{props.current}</div>
//         </div>
//     </div>
// }


export default Home