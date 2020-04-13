import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { authenticate } from '../../../utils/auth'
import SpotifyAuth from './components/SpotifyAuth'
import AuthContext from '../../../components/AuthContext'

const Auth = (props) => {
  
  const {dispatch} = useContext(AuthContext)

  useEffect(() => {
    let querySlice = window.location.search.split('?code=')
    if (querySlice.length > 1) {
      authenticate(querySlice[1], dispatch, props.history)
    }
  }, [])


  return (
    <Wrapper>      
      <Background>
        <Content>
          <Title>Boreal</Title>
          <SpotifyAuth/>
        </Content>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.div`  
  height: 100vh;
`

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Content = styled.div`  
  background: white;
  border 2px solid ${props => props.theme.text};
  border-radius: 4px;
  padding: 2rem 4rem;
  
`

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
`

export default Auth