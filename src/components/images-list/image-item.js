import React from 'react'
import { styled } from 'linaria/react'

export const ImageItem = ({ url, alt, sizes, onClick, id }) => {
  let width = sizes.width > 600 ? 2 : 2
  let height = sizes.width > 600 ? 1 : 2

  return (
    <Wrapper width={width} height={height} onClick={() => onClick(id)}>
      <Image src={url} alt={alt} />
    </Wrapper>
  )
}

const Wrapper = styled.li`
  grid-column: ${props => `span ${props.width}`};
  grid-row: ${props => `span ${props.height}`};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
`
