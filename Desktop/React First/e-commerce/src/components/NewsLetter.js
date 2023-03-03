import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({ textalign:'center' })};
`
const InputContainer = styled.div`
    height:40px;
    width:30%;
    background-color:white;
    display:flex;
    justify-content:space-between;
    ${mobile({ width:'80%'})};
`
const Input = styled.input`
    border:none;
    flex:8;
    padding:20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    color:white;
    background-color:teal
`
const NewsLetter = () => {
  return (
     <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
              <Send/>
            </Button>
        </InputContainer>
     </Container>
  )
}

export default NewsLetter