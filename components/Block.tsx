'use client'

import Image from "next/image"
import { ReactNode } from "react"
import styled from "styled-components"

type BlockProps = {
    img: string,
    title: string,
    children?: ReactNode,
    blockHeight?: string
}

const Container = styled.div<{blockHeight?: string}>`
    height: ${({blockHeight}) => blockHeight || '224px'};
    display: flex;
`

const Card = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FAFAFA;
    gap: 20px;
`
const ImgDiv = styled.div`
    margin-top: 28px;
    width: 98px;
    height: 98px;
    border-radius: 49px;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ChildrenContent = styled.div`
    flex-grow: 1;
    padding: 14px 23px;
    background-color: #D9D9D9;

`


export default function Block ({img, title, children, blockHeight}: BlockProps) {
  return (

    <Container blockHeight={blockHeight}>
        <Card>
            <ImgDiv><Image src={img} alt="" /></ImgDiv>
            <h2>{title}</h2>
        </Card>
        <ChildrenContent>{children}</ChildrenContent>
    </Container>
  )
}
