import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { tablet } from '../responsive'
// Container which holds all elements
const Container = styled.div`
  height: 45vh;
  background-color: #191a19;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  color: white;
`
// Newsletter title
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
// Newsletter description
const Description = styled.div`
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 30px;
  ${tablet({textAlign: "center"})}
`
// Newsletter email input container that wraps input and button
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${tablet({width: "80%"})}
`
// Newsletter email input
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 14px;
`
// Newsletter button
const Button = styled.button`
  flex: 1.2;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  ${tablet({flex: "1.2"})}
`

// Function that returns Newsletter container with email input and send button
function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Be the first to get the latest news about trends, promotions and much
        more!
      </Description>
      <InputContainer>
        <Input placeholder='Enter your Email Address' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
