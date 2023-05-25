'use client'
import Block from '@/components/Block/Block';
import ImgWallet from '../../assets/wallet.svg'
import InputElement from '@/components/InputElement/InputElement';
import { useState, FormEvent, ChangeEvent } from 'react';
import BalanceElement from '@/components/BalanceElement/BalanceElement';
import { dataBalance } from '@/data';
import { Form } from './WalletBlock.styles';


const WalletBlock = () => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onClick = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault
    }

    const formatPhoneNumber = (value:string):string => {
      if (!value) return value
      const phoneNumber = value.replace(/[^\d]/g, "")
      if (phoneNumber.length < 3) {
        return (`-${phoneNumber}`)
      }
      if (phoneNumber.length < 6) {
        return (`-${phoneNumber.slice(0,2)}-${phoneNumber.slice(2)}`)
      }
      if (phoneNumber.length < 10) {
        return (`-${phoneNumber.slice(0,2)}-${phoneNumber.slice(2,5)}-${phoneNumber.slice(5)}`)
      }
      if (phoneNumber.length > 11) {
        return (`-${phoneNumber.slice(0,2)}-${phoneNumber.slice(2,5)}-${phoneNumber.slice(5,9)}-${phoneNumber.slice(9,11)}`)
      }
      return (`-${phoneNumber.slice(0,2)}-${phoneNumber.slice(2,5)}-${phoneNumber.slice(5,9)}-${phoneNumber.slice(9)}`)
    }

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
      if (e.target.getAttribute('id') === 'email') {
        setEmail(e.target.value)
      } else {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value)
        setPhone(formattedPhoneNumber)
      }
    }

  return (
    <Block img={ImgWallet} title={`Wallet ${dataBalance.user}`} blockHeight='416px'>
        <Form action="" onClick={onClick}>
            <BalanceElement />
            <InputElement 
            value={email}
            htmlFor='email'
            label='Email'
            typeInput='email' 
            onChange = {e => onChange(e)}
          />
          <InputElement 
            value={phone}
            htmlFor='phone'
            label='Phone'
            typeInput='text' 
            onChange = {e => onChange(e)}
          />
        </Form>
      </Block>
  )
}

export default WalletBlock