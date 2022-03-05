import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(224, 224, 224, 0.5),
        rgba(225, 225, 225, 0.5)),
         url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({  
        width: "75%",
    })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    outline: none;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Links = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: black;
    bottom: 10;
`

export const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Surname" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" type="email"/>
                    <Input placeholder="Password" type="password"/>
                    <Input placeholder="Confirm Password" type="password"/>
                    <Agreement>
                        By creating an account, you agree to our <b>Privacy Policy and Terms of Use.</b>
                    </Agreement>
                    <Button>CREATE</Button>
                    <Link to="/">
                    <Links>Back</Links>
                    </Link>
                </Form>
                
            </Wrapper>
        </Container>
    )
}
