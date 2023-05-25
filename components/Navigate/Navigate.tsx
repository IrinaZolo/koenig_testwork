'use client'

import { usePathname } from 'next/navigation';
import { Container, Links, LinkContent } from './Navigate.styles';


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