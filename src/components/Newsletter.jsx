import styled from 'styled-components'
import { Send } from '@material-ui/icons';
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
        textAlign: "center"
    })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({
        width: "80%"
    })}
`
const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background: teal;
    color: white;
    cursor: pointer;
`

export const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates for your favourite products.</Desc>
        <InputContainer>
            <Input placeholder='example@email.com'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}
