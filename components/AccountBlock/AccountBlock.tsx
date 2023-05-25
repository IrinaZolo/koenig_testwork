'use client'
import Block from '@/components/Block/Block';
import ImgAccount from '../../assets/account.svg'
import InputElement from '@/components/InputElement/InputElement';
import { ChangeEvent, useState, FormEvent } from 'react';
import { Form } from './AccountBlock.styles';

const AccountBlock = () => {

    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
      if (e.target.getAttribute('id') === 'password') {
        setPassword(e.target.value)
      } else if (e.target.getAttribute('id') === 'firstName') {
        setFirstName(e.target.value)
      } else {
        setLastName(e.target.value)
      }
    }

    const onClick = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault
    }

  return (
    <Block img={ImgAccount} title={"Account"}>
        <Form action="" onClick={onClick}>
          <InputElement 
            value={password}
            htmlFor='password'
            label='Password'
            typeInput='password' 
            onChange = {e => onChange(e)}
          />
          <InputElement 
            value={firstName}
            htmlFor='firstName'
            label='First name'
            typeInput='text' 
            onChange = {e => onChange(e)}
          />
          <InputElement 
            value={lastName}
            htmlFor='lastName'
            label='Last name'
            typeInput='text' 
            onChange = {e => onChange(e)}
          />
        </Form>
      </Block>
  )
}

export default AccountBlock