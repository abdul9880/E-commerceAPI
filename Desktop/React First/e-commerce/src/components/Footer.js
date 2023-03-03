import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, WhatsApp } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin:20px 0px;
    
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    padding:3px;
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    margin-right:20px;

`



const Center = styled.div`
    flex1:1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`
const ListItems = styled.li`
    width:50%;
    cursor:pointer;
    margin-bottom:10px;
`



const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItems = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment = styled.img`
    width:100%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Abdul.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ex provident, soluta iusto nemo vitae quibusdam totam tempora 
                 molestiae deleniti consequatur numquam odit deserunt temporibus 
                 saepe ut excepturi sequi 
                 mollitia. Ut?</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='228C22'>
                    <WhatsApp/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Woman Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Terms</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItems>
                <Room style={{marginRight:"10px"}}/>Amanora Park Town, Hadapsar,Hubli,Karnataka
            </ContactItems>
            <ContactItems>
                <Phone style={{marginRight:"10px"}}/>+91 12345 67890
            </ContactItems>
            <ContactItems>
                <MailOutline style={{marginRight:"10px"}}/>contact@gmail.com
            </ContactItems>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer