'use client'
import Image from "next/image"
import styled from "styled-components"
import arrowSelectButton from '../assets/arrowSelectButton.svg'
import { Dispatch, SetStateAction, useState } from "react"

type optionsType = {
    id: number,
    name: string,
}

type InputProps = {
    htmlFor: string,
    label: string,
    valueOption: string,
    setValueOption: Dispatch<SetStateAction<string>>,
    options: optionsType[]
}

const Container = styled.div`
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
const Text = styled.div`
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
const ImageButton = styled(Image)`
    position: absolute;
    top: 18px;
    right: 15px;
    cursor: pointer;
    &.rotate {
        transform: rotate(180deg);
    }
`
const Options = styled.div`
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

const SelectElement = ({htmlFor, label, options, valueOption, setValueOption}: InputProps) => {

    const [visible, setVisible] = useState(false)
    

    const handleClick = (value: string) => {
        setValueOption(value)
        setVisible(false)
    }
    const handleClickButton = () => {
        setVisible(!visible)
    }

  return (
    <Container>
        <label htmlFor={htmlFor}>{label}</label>
        <Text
          id={htmlFor}
          onClick={handleClickButton} 
        >
            {valueOption}
            <ImageButton className = {visible ? 'rotate':''} src={arrowSelectButton} alt="" />
        </Text>
        {visible && (
            <Options>
                {options.map(item => (
                    <Text key={item.id} onClick={() => handleClick(item.name)} >
                        {item.name}
                    </Text>
                ))}
            </Options>)}
    </Container>
  )
}

export default SelectElement