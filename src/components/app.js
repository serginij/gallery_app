import React from 'react'
import { styled } from 'linaria/react'

import { ImagesList } from '@components/imagesList'

export const App = () => (
  <Wrapper>
    <Header>Gallery</Header>
    <Info>Tap to remove image</Info>
    <ImagesList />
  </Wrapper>
)

const Wrapper = styled.main`
  text-align: center;
`

const Header = styled.h1`
  text-align: center;
`

const Info = styled.h3``
