import { Badge } from '@material-ui/core'
import {
  FlagOutlined,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  text-align: center;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 1208px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #444444;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 40vw;
    padding-top: 6.5rem;

    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      width: 80%;
      border-bottom: 0.5px solid #eee;
      cursor: pointer;
      font-size: 24px;
    }
    z-index: 10;
    align-items: center;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  padding: 5px;
  width: 80%;
`

const Input = styled.input`
  border: none;
  font-size: 22px;
  width: 80%;
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <SearchContainer>
          <Input placeholder='Search' />
          <Search style={{ color: 'white', fontSize: '26px' }} />
        </SearchContainer>
      </li>
      <li style={{ flexDirection: 'column' }}>
        <Badge
          badgeContent={2}
          color='secondary'
          style={{ paddingRight: '15px' }}
        >
          <ShoppingCartOutlined color='white' />
          CART
        </Badge>
      </li>
      <li>Women</li>
      <li>Men</li>
      <li>New Arrivals</li>

      <li style={{ flexDirection: 'column' }}>
        <FlagOutlined /> EN
      </li>
      <li>
        <PersonOutline /> Account
      </li>
    </Ul>
  )
}

export default RightNav
