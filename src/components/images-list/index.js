import React from 'react'
import { styled } from 'linaria/react'

import { ImageItem } from './image-item'

export const ImagesList = ({ images, deleteHandler }) => {
  let imagesList =
    images.length > 0 ? (
      images.map((image, index) => {
        return (
          <ImageItem
            onClick={deleteHandler}
            key={image.id}
            url={image.webformatURL}
            alt={'image' + index}
            sizes={{
              width: image.webformatWidth,
              height: image.webformatHeight
            }}
            id={image.id}
          />
        )
      })
    ) : (
      <Loading />
    )

  return <Container>{imagesList}</Container>
}

const Container = styled.ul`
  width: 90%;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(6, minmax(150px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  grid-gap: 1rem;
  padding: 0;
  list-style: none;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

const Loading = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
