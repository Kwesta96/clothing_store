import styled from 'styled-components'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Products } from '../components/Products'
import { mobile } from '../responsive'


const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({
        margin: "0px 20px",
        display: "flex",
        flexDirection: "column"
    })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
        margin: 0
    })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({
        margin: "10px 0px"
    })}
`

const Option = styled.option`
`

export const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Clothes</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort By:</FilterText>
                    <Select>
                        <Option selected>Relevance</Option>
                        <Option>Price: High to Low</Option>
                        <Option>Price: Low to High</Option>
                        <Option>Top Rated</Option>
                        <Option>Newest Arrivals</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}