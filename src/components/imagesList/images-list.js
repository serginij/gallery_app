import React, { useState, useEffect } from 'react'
import { styled } from 'linaria/react'

import { ImageItem } from '@components/imageItem'

const getImages = page =>
  fetch(
    `https://pixabay.com/api/?key=${process.env.API_KEY}&image_type=photo&pretty=true&per_page=12&page=${page}`
  ).then(data => data.json())

export const ImagesList = () => {
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

  let imagesList =
    images.length > 0 ? (
      images.map((image, index) => {
        return (
          <ImageItem
            onClick={deleteHandler}
            key={image.id}
            url={image.webformatURL}
            alt={'image' + index}
            width={image.webformatWidth}
            id={image.id}
          />
        )
      })
    ) : (
      <p>Wait</p>
    )

  return (
    <Wrapper>
      <Container onClick={() => console.log(images)}>{imagesList}</Container>
      <PageContainer>
        <Button onClick={() => changePageHandler('prev')}>Prev</Button>
        <CurrentPage>{page}</CurrentPage>
        <Button onClick={() => changePageHandler('next')}>Next</Button>
      </PageContainer>
    </Wrapper>
  )
}

const Container = styled.ul`
  all: unset;
  width: 90%;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 1rem;
`

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  width: 10rem;
`

const Button = styled.button`
  cursor: pointer;
  background-color: #007bff;
  color: #ffffff;
  border: 1px solid #eee;
  box-shadow: 3px 3px 10px 0px rgba(212, 212, 212, 1);
  width: 6em;
  border-radius: 10%;
  height: 3em;
`

const CurrentPage = styled.p``
