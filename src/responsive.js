import {css} from "styled-components"

export const tablet = (props) =>{
    return css`
        
  @media only screen and (max-width: 1208px){
    ${props}
  }
    `
}

export const mobile =(props) =>{
    return css`
    @media only screen and(max-width:900px){
        ${props}
    }
    `
}