import styled from 'styled-components'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube, Room, Phone, MailOutline } from '@material-ui/icons';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    
`


export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>shopping.</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero veritatis minus atque dolor harum non quos vero amet tempora repellat.
                    Id sint laborum vitae ad ut distinctio natus culpa vero?
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon color='0e76a8'>
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>About</ListItem>
                    <ListItem>Shopping Cart</ListItem>
                    <ListItem>Mens Fashion</ListItem>
                    <ListItem>Womens Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Shipping Info</ListItem>
                    <ListItem>Returns</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room/>
                    123 Road, South Africa, 1234
                </ContactItem>
                <ContactItem>
                    <Phone/>
                    +27 12 345 6789
                </ContactItem>
                <ContactItem>
                    <MailOutline/>
                    contactus@email.com
                </ContactItem>
            </Right>
        </Container>
    )
}