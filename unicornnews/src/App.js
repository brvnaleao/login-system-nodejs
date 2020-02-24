import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import AuthenticatedComponent from './components/AuthenticatedComponent'


class App extends React.Component{


  

  render() { 
  return(
     
    <BrowserRouter>
    <Switch>
      <Route path="/Login" component={Home}/>
      <Route path="/Registration" exact component={Registration}/>      
      <Route path="/AuthenticatedComponent" component={AuthenticatedComponent}/>
    </Switch>
  </BrowserRouter>


  );

  }
}
export default App;
