import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 7px 15px;
  border-radius: 5px;
  background-color: #bff5ef;
  color: black;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    background-color: transparent;
    color: #bff5ef;
    border: 2px solid #bff5ef;
  }
`;

function Button(props){
    return(
        <ButtonWrapper>{props.children}</ButtonWrapper>
    );
}

export default Button;