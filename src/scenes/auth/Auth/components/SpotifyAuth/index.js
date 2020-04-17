import React, { Component } from 'react'
import styled from 'styled-components' 

class SpotifyAuth extends Component {

  redirect = () => {
    const redirect = 'http://localhost:3000/login'

    //TODO state param validation
    const params = `?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT}&response_type=code&redirect_uri=${redirect}`    
    window.location = `https://accounts.spotify.com/authorize${params}`
  }

  render(){
    return (
      <Wrapper>
        <AuthButton onClick={this.redirect}>
          Login with Spotify
        </AuthButton>        
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`

const AuthButton = styled.div`
  position: relative;
  background-color: #A88BEB;
  background: linear-gradient( 45deg, #A88BEB, #F8CEEC );
  border-radius: 30px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  display: inline-block;
  color: white;
  font-weight: 600;
  transition: background-color 0.5s;
  z-index: 1;

  &:before {
    border-radius: 30px;
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fad0c4;
    background-image: linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%);
    transition: opacity 0.2s linear;
    opacity: 0;
    z-index: -1;
  }

  &:hover::before {        
    opacity: 1;
  }
`

export default SpotifyAuth