'use client'

import arrowSelectButton from '../../assets/arrowSelectButton.svg'
import { Dispatch, SetStateAction, useState } from "react"
import { Container, Text, ImageButton, Options } from './SelectElement.styles'

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