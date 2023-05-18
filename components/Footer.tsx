'use client'
import styled from 'styled-components';

const Container = styled.footer`
    padding: 0 141px;
    padding-top: 15px;
    display: flex;
    gap: 133px;
    height: 103px;
    border-top: 3px solid #FF9F00;
`
const Text = styled.p`
    width: 600px;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
`
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TitleContacts = styled.h2`
    font-size: 12px;
    line-height: 15px;
    font-weight: 300;
`
const LinksContact = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
`


export default function Footer() {

    const telegram: string = new URL('../assets/telegram.png', import.meta.url).href
    const vk: string = new URL('../assets/vk.png', import.meta.url).href
    const youtube: string = new URL('../assets/youtube.png', import.meta.url).href

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
                <a href="#"><img src={telegram} alt="Telegram" /></a>
                <a href="#"><img src={vk} alt="VK" /></a>
                <a href="#"><img src={youtube} alt="YouTube" /></a>
            </LinksContact>
        </Contacts>
    </Container>
    );
}