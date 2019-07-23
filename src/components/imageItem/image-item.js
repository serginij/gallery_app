import React from 'react'
import { styled } from 'linaria/react'

export const ImageItem = ({ url, alt, width, onClick, id }) => {
  let content =
    width > 600 ? (
      <BigWrapper onClick={() => onClick(id)}>
        <Image src={url} alt={alt} />
      </BigWrapper>
    ) : (
      <SmallWrapper onClick={() => onClick(id)}>
        <Image src={url} alt={alt} />
      </SmallWrapper>
    )

  return content
}

const SmallWrapper = styled.li`
  all: unset;
  grid-column: span 2;
  /* grid-row: span 1; */
  overflow: hidden;
`
const BigWrapper = styled.li`
  all: unset;
  grid-column: span 2;
  align-self: start;
  /* height: 50%; */
  grid-row: span 1;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
`
