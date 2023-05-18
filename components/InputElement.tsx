'use client'
import styled from "styled-components"

type InputProps = {
    htmlFor: string,
    label: string,
    typeInput: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Container = styled.div`
  height: 48px;
  padding: 0 7px;
  background-color: #EBEBEB;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  border-radius: 5px;
  align-items: center;
`
const Input = styled.input`
  height: 35px;
  width: 440px;
  border-radius: 5px;
  padding: 0 12px;
`

const InputElement = ({htmlFor, label, typeInput, value, onChange}: InputProps) => {
  return (
    <Container>
        <label htmlFor={htmlFor}>{label}</label>
        <Input 
          type={typeInput} 
          id={htmlFor}
          value={value}
          required
          onChange={onChange}
        />
    </Container>
  )
}

export default InputElement