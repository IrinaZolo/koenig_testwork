'use client'
import Image from "next/image"

import { ReactNode } from "react"
import { Container, Card, ImgDiv, ChildrenContent } from "./Block.styles"

type BlockProps = {
    img: string,
    title: string,
    children?: ReactNode,
    blockHeight?: string
}


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
