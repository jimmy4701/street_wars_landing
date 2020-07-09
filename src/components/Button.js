import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    return(
        <CustomButton {...props}>{props.children}</CustomButton>
    )
}

const CustomButton = styled.button`
    background-color: black;
    color: color: white;
    padding: 1em;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0.5em 0;
    border-style: none;
    ${props => props.fluid && `width: 100%;`}
    ${props => props.flex && `flex: ${props.flex || 1};`}
`

export default Button

