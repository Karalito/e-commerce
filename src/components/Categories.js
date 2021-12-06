import styled from 'styled-components'
import { categories } from '../data'
import { tablet } from '../responsive'
import CategoryItem from './CategoryItem'

// Container which holds all elements
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  
`

// Wrapper to wrap categories
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  ${tablet({ width:"100%"})}
`

// Function that goes through categories and returns them
function Categories() {
  return (
    <Container>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id}></CategoryItem>
        ))}
      </Wrapper>
    </Container>
  )
}

export default Categories
