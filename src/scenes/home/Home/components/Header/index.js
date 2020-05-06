import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu'

const Header = () => {
  return (
    <Wrapper>
      <Title>Boreal</Title>
      <Menu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  font-size: 2.5rem;
  padding: 1rem;
  font-weight: 900;
`

export default Header