import styled from 'styled-components';
import Block from '@/components/Block';
import ImgWallet from '../assets/wallet.svg'
import InputElement from '@/components/InputElement';
import { useState } from 'react';
import BalanceElement from './BalanceElement';
import { dataBalance } from '@/data';

const Form =styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

const WalletBlock = () => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

  return (
    <Block img={ImgWallet} title={`Wallet ${dataBalance.user}`} blockHeight='416px'>
        <Form action="" onClick={e => e.preventDefault}>
            <BalanceElement />
            <InputElement 
            value={email}
            htmlFor='email'
            label='Email'
            typeInput='email' 
            onChange = {e => setEmail(e.target.value)}
          />
          <InputElement 
            value={phone}
            htmlFor='phone'
            label='Phone'
            typeInput='text' 
            onChange = {e => setPhone(e.target.value)}
          />
        </Form>
      </Block>
  )
}

export default WalletBlock