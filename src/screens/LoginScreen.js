import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 300;
`

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #191a19;
  color: white;
  cursor: pointer;
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

function LoginScreen() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>New here? Create an account here.</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default LoginScreen
