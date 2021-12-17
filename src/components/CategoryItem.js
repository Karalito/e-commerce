import styled from 'styled-components'
import { tablet } from '../responsive'
// Container which holds all elements
const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 100vh;
  position: relative;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.05);
  }
`
// Category item image
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`
// Info wrapper that holds title and button
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// Product title
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
// Browse button
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;

  &:hover{
      background-color: #f8f4f4;
  }
`

// Function that takes single product and returns that product container
function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} alt={item.title}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Browse Now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
