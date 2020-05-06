import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SpotifyWhite from './assets/spotify-white.png'

const fetchMe = async(handleMe, handleShow) => {
  const res = await axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
    }
  })
  console.log(res.data)
  if (res.status === 200) {
    handleMe(res.data)
    setTimeout(() => {
      handleShow(true)
    }, 800)
  }
}

const Me = () => {
  const [me, handleMe] = useState(null)  
  const [show, handleShow] = useState(null)

  useEffect(() => {
    fetchMe(handleMe, handleShow)
  }, [])

  return (
    <Wrapper>      
      <VisibleWrapper expanded={!!(me)}>
        { me && (
          <Name show={show}>
            { `@${me && me.id}` }
          </Name>
        )}
        <Logo src={SpotifyWhite} alt='spotify-white'/>
      </VisibleWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 200px;
  height: 40px;
  position: relative;
`

const VisibleWrapper = styled.div`
  border-radius: 25px;
  background: ${props => props.theme.spotify};
  height: 40px;
  float: right;
  transition: width 0.8s;
  width: ${props => props.expanded ? '200px' : '40px'};
  
`

const Logo = styled.img`
  height: 36px;
  width: 36px;
  margin: 2px;
  float: right;
`

const Name = styled.div`
  font-weight: 900;
  color: white;
  display: inline-block;
  align-items: center;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity 0.2s;
`

export default Me