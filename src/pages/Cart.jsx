import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding: "10px"
    })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
    margin-right: 55px;
    ${mobile({
        display: "none"
    })}
`

const TopText = styled.span`
    margin: 0px 10px;
    cursor: pointer;
    text-decoration: underline;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column"
    })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column"
    })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductID = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductQuantity = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({
        margin: "5px 15px"
    })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({
        marginBottom: "20px"
    })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && '500'};
    font-size: ${props=>props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


export const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.vintageindustries.nl/download_front/uyfzer1704/3541_Craft_sherpa_Burgundy_check_2.png" />
                                <Details>
                                    <ProductName><b>Product:</b> CLASS SHERPA JACKET</ProductName>
                                    <ProductID><b>ID:</b> 858924365293</ProductID>
                                    <ProductColor color='maroon' />
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>1</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>R 550</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.vintageindustries.nl/download_front/schkyb1297/5012_Corduroy_cap_Beige.png" />
                                <Details>
                                    <ProductName><b>Product:</b> CORDUROY CAP</ProductName>
                                    <ProductID><b>ID:</b> 592437852361</ProductID>
                                    <ProductColor color='lightgrey' />
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductQuantityContainer>
                                    <Add />
                                    <ProductQuantity>2</ProductQuantity>
                                    <Remove />
                                </ProductQuantityContainer>
                                <ProductPrice>R 300</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>R 850</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Cost</SummaryItemText>
                            <SummaryItemPrice>R 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>- R 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R 850</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
