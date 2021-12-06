import styled from 'styled-components'

// Container which holds all elements
const Container = styled.div`
  height: 30px;
  background-color: #dd4a48;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  padding: 5px;
`
// Function that returns announcement
function Announcement() {
  return (
    <Container>Christmas is here! Free Shipping on Orders Over 20€</Container>
  )
}

export default Announcement
