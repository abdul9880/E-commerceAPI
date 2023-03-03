
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'


const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    
`
const Select = styled.select`
    padding:10px;
    margin-left:20px;
`
const Options = styled.option`

`
const ProductsList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Options disabled selected>Color</Options>
                    <Options>White</Options>
                    <Options>Blue</Options>
                    <Options>Green</Options>
                    <Options>Red</Options>
                    <Options>Brown</Options>
                    <Options>Grey</Options>
                </Select>
                <Select>
                    <Options disabled selected>Size</Options>
                    <Options>XS</Options>
                    <Options>S</Options>
                    <Options>M</Options>
                    <Options>L</Options>
                    <Options>XL</Options>
                    <Options>XXL</Options>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Options selected>Newest</Options>
                    <Options>Price (Low to High)</Options>
                    <Options>Price (High to Low)</Options>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
   </Container>
   
  )
}

export default ProductsList