import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../../components/Wrapper'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'

const Home = () => {

  return (
    <Wrapper>
      <ContentWrapper>
        {/* <Navbar /> */}
        <MainCard>
          <Header />
          <Content />
        </MainCard>
      </ContentWrapper>
    </Wrapper>
  )
}

// height: 100%;
const MainCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: transparent;
  border-radius: 5px;
  padding: 1rem;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
`

export default Home