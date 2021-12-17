import React from 'react'
import styled from 'styled-components'
import { FlagOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { tablet } from '../../responsive'
import HamburgerMenu from './HamburgerMenu'
// Container which holds all elements
const Container = styled.div`
  height: 60px;
`
// Wrapper to wrap elements inside navbar
const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  ${tablet({ width: '90%', padding: '20px 0' })}
`

// Left side styling
const Left = styled.div`
  flex: 1;
  display: flex;
`

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  ${tablet({ display: 'none' })}
`

const Input = styled.input`
  border: none;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-right: 25px;
`
// Right side styling
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ display: 'none' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 15px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  display: flex;
`
const Line = styled.hr`
  width: 80%;
  margin: auto;
  ${tablet({ width: '90%' })}
`
// Function that returns Navbar
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo><a href="/">Slasher.</a></Logo>
          <LeftWrapper>
            <MenuItem>New Arrivals</MenuItem>
            <MenuItem>Women</MenuItem>
            <MenuItem>Men</MenuItem>
            <MenuItem style={{ color: 'red' }}>Discounts %</MenuItem>
          </LeftWrapper>
        </Left>
        <Right>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
          <MenuItem><a href='/register'>Register</a></MenuItem>
          <MenuItem ><a href='/login'>Sign In</a></MenuItem>

          <MenuItem style={{ flexDirection: 'column' }}>
         
            <Badge badgeContent={2} color='secondary'>
            <a href='/cart'><ShoppingCartOutlined /></a>
            </Badge>
          </MenuItem>
        </Right>
        <HamburgerMenu />
      </Wrapper>
      <Line />
    </Container>
  )
}

export default Navbar
