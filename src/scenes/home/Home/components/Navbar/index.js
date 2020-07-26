import React, { useState } from 'react'
import styled from 'styled-components'

// Icons 
// import Search from '../../../../../icons/Search'
import Question from '../../../../../icons/Question'

const Navbar = () => {
  const [open, toggle] = useState(false)

  return (
    <Wrapper open={!!(open)}>
      <Icons>
        <IconWrapper onClick={() => { !!(open) ? toggle(false) : toggle('question') }}>
          <Question />
        </IconWrapper>
      </Icons>
    </Wrapper>
  )
}

// min-height: 100%;
const Wrapper = styled.div`
  box-sizing: border-box;
  background: ${props => props.theme.primary};
  border-radius: 5px;
  margin-right: 1rem;
  position: relative;
  width: ${props => props.open ? '450px' : '50px'};
  transition: width 0.5s;
`

const Icons = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`

const IconWrapper = styled.div`

  > svg {
    padding: 0.5rem;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 50%;
    fill: white;
    
    &:hover {
      fill: ${props => props.theme.primary};
      background: white;
    }
  }
`

export default Navbar