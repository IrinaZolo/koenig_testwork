'use client'

import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.nav`
    padding: 0 141px;
    display: flex;
    justify-content: flex-end;
    height: 124px;
    border-bottom: 3px solid #FF9F00;
`
const Links = styled.div`
    align-self: flex-end;
    margin-bottom: 13px;
    display: flex;
    gap: 25px;
`
const LinkContent = styled(Link)`
    outline: none;
    color: #FF9F00;
    font-weight: 700;

    &:hover {
        border-bottom: 2px solid #FF9F00;
    }

    &.active {
        border-bottom: 2px solid #FF9F00;
    }
`

const Navigate = () => {

    const pathname = usePathname()

    return (
        <Container>
            <Links>
                <LinkContent href="/" className={pathname === ("/") ? 'active' : ''}>Main</LinkContent>
                <LinkContent href="/settings" className={pathname.startsWith("/settings") ? 'active' : ''}>Settings</LinkContent>
                <LinkContent href="/wallets" className={pathname.startsWith("/wallets") ? 'active' : ''}>Wallets</LinkContent>
            </Links>
        </Container>
    )
}

export default Navigate