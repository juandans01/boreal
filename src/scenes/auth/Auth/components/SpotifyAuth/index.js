import React, { Component } from 'react'
import styled from 'styled-components' 

const AuthButton = styled.div`
  background: #1DB954;
  border-radius: 30px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  display: inline-block;
  color: white;
`

class SpotifyAuth extends Component {

  redirect = () => {
    const redirect = 'http://localhost:3000/login'

    //TODO state param validation
    const params = `?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT}&response_type=code&redirect_uri=${redirect}`    
    window.location = `https://accounts.spotify.com/authorize${params}`
  }

  render(){
    return (
      <div>
        <AuthButton onClick={this.redirect}>
          Auth spotify
        </AuthButton>        
      </div>
    )
  }
}

export default SpotifyAuth