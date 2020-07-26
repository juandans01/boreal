import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const SearchList = ({data}) => {
  return (
    <div>
      <Title>Results</Title>
      { data.items.length > 0 && data.items.map((item) => (
        <Item>
          <Image
            src={item.album.images.find(img => img.height == 64).url}
          />
          <ItemContent>
            <SongName>
              { item.name }
            </SongName>
            <div>
              { item.artists[0].name }
            </div>
          </ItemContent>
        </Item>
      ))}
    </div>
  )
}

const Title = styled.p`
  color: white;
  font-size: 1.2rem;
`

const Item = styled.div`
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;  
  border-radius: 5px;
  background: transparent;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${props => lighten('0.1', props.theme.primary)};
  }
`

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 5px;
`

const ItemContent = styled.div`
  padding-left: 1rem;
  color: white;
  
`

const SongName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;

`

export default SearchList