'use client'
import styled from 'styled-components';
import WalletBlock from '@/components/WalletBlock';

const Container = styled.main`
  gap: 35px;
  padding-inline: 141px;
`


export default function Page() {

  return (
    <Container>
      <h1>Wallets</h1>
      <WalletBlock />
    </Container>
  );
}