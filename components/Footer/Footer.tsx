'use client'
import Image from 'next/image';
import { Container, Text, Contacts, TitleContacts, LinksContact } from './Footer.styles';
import Link from 'next/link';


export default function Footer() {

    const telegram: string = new URL('../../assets/telegram.png', import.meta.url).href
    const vk: string = new URL('../../assets/vk.png', import.meta.url).href
    const youtube: string = new URL('../../assets/youtube.png', import.meta.url).href

    return (
    <Container>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
        </Text>
        <Contacts>
            <TitleContacts>Contact us:</TitleContacts>
            <LinksContact>
                <Link href="#"><Image src={telegram} alt="Telegram" width={20} height={20}/></Link>
                <Link href="#"><Image src={vk} alt="VK" width={20} height={20}/></Link>
                <Link href="#"><Image src={youtube} alt="YouTube" width={20} height={15}/></Link>
            </LinksContact>
        </Contacts>
    </Container>
    );
}