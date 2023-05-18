'use client'
import styled from 'styled-components';

const Container = styled.main`
  gap: 35px;
`

const Title = styled.h1`
  padding: 0 141px;
`
const Image = styled.img`
  width: 100vw;
  object-position: top;
  object-fit: cover ;
  max-height: 50vh;
`


export default function Home() {

  const mainImg: string = new URL('../assets/mainImg.jpg', import.meta.url).href

  return (
    <Container>
      <Title>Main page</Title>
      <Image src={mainImg} alt="" />
    </Container>
  );
}