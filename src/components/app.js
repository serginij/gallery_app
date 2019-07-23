import React, { useState, useEffect } from 'react'
import { styled } from 'linaria/react'

import { ImagesList } from '@components/images-list'
import { PageChangeContainer } from '@components/page-change-container'

const getImages = page =>
  fetch(
    `https://pixabay.com/api/?key=${process.env.API_KEY}&image_type=photo&pretty=true&per_page=24&page=${page}`
  ).then(data => data.json())

export const App = () => {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getImages(page).then(data => setImages(data.hits))
  }, [page, setImages])

  const changePageHandler = type => {
    if (type == 'next') {
      setPage(page + 1)
    }
    if (type == 'prev' && page > 1) {
      setPage(page - 1)
    }
  }

  const deleteHandler = id => {
    let newImages = images.filter(image => image.id !== id)
    setImages(newImages)
  }

  return (
    <Wrapper>
      <Header>Gallery app</Header>
      <Info>Tap to remove image</Info>
      <ImagesList images={images} deleteHandler={deleteHandler} />
      <PageChangeContainer page={page} changePageHandler={changePageHandler} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h1``

const Info = styled.span`
  font-size: 1.2em;
`
