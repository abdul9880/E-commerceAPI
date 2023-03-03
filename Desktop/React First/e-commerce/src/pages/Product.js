import { Add, CurrencyRupee, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'


const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImgContainer = styled.div`
    flex:1;
`
const Img = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    margin: 0px 50px;
`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price= styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
    width:50%;    
    display:flex;
    justify-content:space-between;
    margin: 30px 0px;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    margin-left:5px;
    padding:3px;
    cursor:pointer;
`
const FilterSize = styled.select`
   margin-left:10px;
   padding:5px;
`
const FilterSizeOption = styled.option`    
`
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AmountContainer = styled.div`
    display:flex;    
    align-items:center;
    font-weight:700;
   
    
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:2px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
    
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
        
    }
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Img src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint iure molestias deleniti molestiae. Eveniet debitis soluta aliquid praesentium, odio labore, rem non illo illum nemo, provident sapiente ab similique.</Desc>
                <Price><CurrencyRupee style={{fontsize:'40px'}}/>1500/-</Price>
                <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='darkblue'/>
                    <FilterColor color='grey'/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove style={{cursor:'pointer'}}/>
                    <Amount>1</Amount>
                    <Add style={{cursor:'pointer'}}/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
           </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product