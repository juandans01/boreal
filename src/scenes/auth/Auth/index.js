import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { authenticate } from '../../../utils/auth'
import SpotifyAuth from './components/SpotifyAuth'
import AuthContext from '../../../components/AuthContext'
import Wrapper from '../../../components/Wrapper'

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
      <Card>
        <Content>
          <Title>Boreal</Title>
          <Subtitle>shared playlist for all</Subtitle>
          <SpotifyAuth/>
        </Content>
      </Card>
    </Wrapper>
  )
}

const Card = styled.div`
  border-radius: 5px;
  background: white;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 30vw;
`

const Title = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 900;
`

const Subtitle = styled.div`
  padding: 1rem 2rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
  margin-bottom: 1rem;
`

const Content = styled.div`  
`

export default Auth