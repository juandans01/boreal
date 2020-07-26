import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { lighten } from 'polished'

class Search extends Component {  

  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.timeoutToken = null
  }

  handleValue = (e) => {
    clearTimeout(this.timeoutToken)
    if (e.target.value == '' || e.target.value == ' ') {
      this.props.onSearchResults(null)
    }
    this.setState({
      value: e.target.value
    }, () => {
      this.timeoutToken = setTimeout(this.search, 500)
    })
  }

  search = async() => {
    try {
      const res = await axios.get(`https://api.spotify.com/v1/search?q=${window.encodeURI(this.state.value)}&type=track`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
        }
      })

      if (res.status === 200) {
        this.props.onSearchResults(res.data.tracks)
      }
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    return (
      <Wrapper>
        <Input 
          placeholder='Search' 
          onChange={this.handleValue} 
          value={this.state.value}
        />
      </Wrapper>
    )
  }
}

export default Search

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-grow: 1;
`

// background: white;
const Input = styled.input`
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  width: 100%;
  font-family: ${props => props.theme.fonts.input};
  font-size: 1.2rem;
  transition: all 0.2s;
  outline: none;
  background: ${props => lighten('0.1', props.theme.primary)};
  border: 4px solid ${props => props.theme.primary};
  color: white;
  font-weight: 600;

  ::placeholder {
    color: white;
    font-weight: 600;
  }
`