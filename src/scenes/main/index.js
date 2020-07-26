import React, { Component } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

import Auth from '../auth/Auth'
import Home from '../home/Home'


class Main extends Component {

  componentDidMount(){
    const refreshToken = window.localStorage.getItem('refresh_token', null)
    if (!refreshToken || refreshToken === 'undefined') {
      if (!this.props.auth.loading && !this.props.auth.authenticated && window.location.pathname !== '/login') {
        window.location = '/login'
      }       
    }
  }

  componentDidUpdate(prevProps){
    if (!prevProps.auth.authenticated && this.props.auth.authenticated && window.location.pathname === '/login') {
      window.location = '/'
    }
  }
  
  render(){

    return (
      <Router>
        <Switch>        
          { this.props.auth.authenticated && (
            <Route exact path='/' component={Home}/>
          )}        
  
          <Route exact path='/login' component={Auth} />
        </Switch>
      </Router>
    )
  }

}

export default Main