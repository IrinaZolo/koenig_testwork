'use client'
import { Container, Input } from "./InputElement.styles"

type InputProps = {
    htmlFor: string,
    label: string,
    typeInput: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}


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