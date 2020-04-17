import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../../components/Wrapper'
import Header from './components/Header'

const Home = () => {

  return (
    <Wrapper>
      <MainCard>
        <Header />
      </MainCard>
    </Wrapper>
  )
}

const MainCard = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: white;
  border-radius: 5px;
  padding: 1rem;
`

export default Home