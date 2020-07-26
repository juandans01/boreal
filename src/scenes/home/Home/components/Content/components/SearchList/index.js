import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import Play from '../../../../../../../icons/Play'
const SearchList = ({data}) => {
  return (
    <div>
      <Title>Results</Title>
      { data.items.length > 0 && data.items.map((item) => (
        <Item>
          <ItemContent>
              <Image
                src={item.album.images.find(img => img.height == 64).url}
              />
              <TextContent>
                <SongName>
                  { item.name }
                </SongName>
                <div>
                  { item.artists[0].name }
                </div>
              </TextContent>                        
          </ItemContent>        
          <div>
            <PlayButton>
              <Play />
            </PlayButton>
        </div>
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
  align-items: center;
  justify-content: space-between;
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
  display: flex;  
  align-items: center;
`

const TextContent = styled.div`
  padding-left: 1rem;
  color: white; 
`

const PlayButton = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: transparent;
  transition: all 0.2s;
  > svg {
    margin-left: 0.2rem;
    height: 20px;
    width: 20px;
    fill: white;
  }

  &:hover {
    background: white;

    > svg {
      fill: ${props => lighten('0.1', props.theme.primary)};
    }
  }
`

const SongName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;

`

export default SearchList