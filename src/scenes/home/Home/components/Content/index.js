import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Search from './components/Search'
import SearchList from './components/SearchList'

const Content = () => {
  const [searchResults, handleSearchResults] = useState(null)

  return (
    <Wrapper>
      <Search onSearchResults={handleSearchResults} />
      { searchResults && (
        <SearchList data={searchResults} />
      )}
    </Wrapper>
  )
}

export default Content


const Wrapper = styled.div`
  width: 100%;
`