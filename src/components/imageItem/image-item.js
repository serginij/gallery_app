import React from 'react'
import { styled } from 'linaria/react'

export const ImageItem = ({ url, alt }) => (
  <Wrapper>
    <Image src={url} alt={alt} />
  </Wrapper>
)

const Wrapper = styled.li`
  all: unset;
`

const Image = styled.img`
  width: 40%;
  height: 40%;
`
