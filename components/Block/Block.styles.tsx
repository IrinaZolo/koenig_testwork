import styled from "styled-components"

export const Container = styled.div<{blockHeight?: string}>`
    height: ${({blockHeight}) => blockHeight || '224px'};
    display: flex;
`

export const Card = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FAFAFA;
    gap: 20px;
`
export const ImgDiv = styled.div`
    margin-top: 28px;
    width: 98px;
    height: 98px;
    border-radius: 49px;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ChildrenContent = styled.div`
    flex-grow: 1;
    padding: 14px 23px;
    background-color: #D9D9D9;

`