import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <Title>Boreal</Title>
    </div>
  )
}

const Title = styled.div`
  font-size: 2.5rem;
  padding: 1rem;
  font-weight: 900;
`

export default Header