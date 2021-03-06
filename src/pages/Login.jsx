import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(224, 224, 224, 0.5),
        rgba(225, 225, 225, 0.5)),
         url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({
        
    })}
`

const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
    
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    outline: none;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Links = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: black;
`

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Confirm Password" type="password"/>
                    <Button>LOGIN</Button>
                    <Links>FORGOT YOUR PASSWORD</Links>
                    <Link to="/register">
                    <Links>CREATE NEW ACCOUNT</Links>
                    </Link>
                    <Link to="/">
                    <Links>Back</Links>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}