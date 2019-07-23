import React, { useState, useEffect } from 'react'
import { styled } from 'linaria/react'

import { ImageItem } from '@components/imageItem'

const getImages = () =>
  fetch(
    `https://pixabay.com/api/?key=${process.env.API_KEY}&image_type=photo&pretty=true&per_page=40`
  ).then(data => data.json())

// const testQuery = `https://pixabay.com/api/?key=${process.env.API_KEY}&q=yellow+flowers&image_type=photo`

export const ImagesList = () => {
  const [images, setImages] = useState([])
  // const [query, setQuery] = useState('')

  useEffect(() => {
    getImages().then(data => setImages(data.hits))
  }, [setImages])

  let imagesList =
    images.length > 0 ? (
      images.map((image, index) => {
        if (index < 10) {
          return (
            <ImageItem
              key={image.id}
              url={image.largeImageURL}
              alt={'image' + index}
            />
          )
        }
      })
    ) : (
      <p>Wait</p>
    )

  return <Container onClick={() => console.log(images)}>{imagesList}</Container>
}

const Container = styled.ul`
  all: unset;
`
