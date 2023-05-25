import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
`
export const Text = styled.h2`
    margin-top: 10px;
`
export const InfoElements = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px 21px;
    padding-top: 0px; 
`

export const InfoElement = styled.div`
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13px;
    &:nth-child(odd) {
        background-color: #D9D9D9;
    }
    &:nth-child(even) {
        background-color: #E4E4E4;
    }
`