import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div`
    position: relative;
    height: 48px;
    padding: 0 7px;
    background-color: #EBEBEB;
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    border-radius: 5px;
    align-items: center;
`
export const Text = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    width: 440px;
    border-radius: 5px;
    padding: 0 12px;
    font-size: 16px;
    line-height: 19px;
    background-color: white;
    cursor: pointer;
`
export const ImageButton = styled(Image)`
    position: absolute;
    top: 18px;
    right: 15px;
    cursor: pointer;
    &.rotate {
        transform: rotate(180deg);
    }
`
export const Options = styled.div`
    box-sizing: content-box;
    position: absolute;
    top: 40px;
    right: 6px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 440px;
    background-color: white;
    border: 2px solid #e6e2e2;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`