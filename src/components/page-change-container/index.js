import React from 'react'
import { styled } from 'linaria/react'

export const PageChangeContainer = ({ page, changePageHandler }) => (
  <PageContainer>
    <Button onClick={() => changePageHandler('prev')}>Prev</Button>

    <CurrentPage>{page}</CurrentPage>
    <Button onClick={() => changePageHandler('next')}>Next</Button>
  </PageContainer>
)

const PageContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin: 2em;
`

const Button = styled.button`
  cursor: pointer;
  background-color: #007bff;
  font-size: 1rem;
  color: #ffffff;
  border: none;
  box-shadow: 2px 2px 10px 0px black;
  width: 6em;
  border-radius: 6%;
  height: 3em;
`

const CurrentPage = styled.p`
  margin: 1.2rem;
`
