import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
// Container which holds all elements
const Container = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
`
// Function that maps through product data and returns container with products
function Products() {
    return (
        <Container>
            {popularProducts.map(item =>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products
