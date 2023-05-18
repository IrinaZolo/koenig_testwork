'use client'
import styled from 'styled-components';
import Block from '@/components/Block';
import ImgAccount from '../assets/account.svg'
import InputElement from '@/components/InputElement';
import { useState } from 'react';

const Form =styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

const AccountBlock = () => {

    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

  return (
    <Block img={ImgAccount} title={"Account"}>
        <Form action="" onClick={e => e.preventDefault}>
          <InputElement 
            value={password}
            htmlFor='password'
            label='Password'
            typeInput='password' 
            onChange = {e => setPassword(e.target.value)}
          />
          <InputElement 
            value={firstName}
            htmlFor='firstName'
            label='First name'
            typeInput='text' 
            onChange = {e => setFirstName(e.target.value)}
          />
          <InputElement 
            value={lastName}
            htmlFor='lastName'
            label='Last name'
            typeInput='text' 
            onChange = {e => setLastName(e.target.value)}
          />
        </Form>
      </Block>
  )
}

export default AccountBlock