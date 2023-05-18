'use client'
import styled from 'styled-components';
import AccountBlock from '@/components/AccountBlock';
import FormatDataBlock from '@/components/FormatDataBlock';

const Container = styled.main`
  gap: 30px;
  padding-inline: 141px;
`


export default function Settings() {

  return (
    <Container>
      <h1>Settings</h1>
      <AccountBlock />
      <FormatDataBlock />
    </Container>
  );
}