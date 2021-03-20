import React from "react";
import styled from "styled-components";
import Button  from "./button";
import BrandLogo from "../assets/logo/cornerLogo.png";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.img`
  width: 5em;
  height: 5em;
  cursor: pointer;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 20px;
  font-size: 20px;
  color: #bff5ef;
  cursor: pointer;
  font-weight: 520;
  &:hover {
    background-color: transparent;
    border: none;
    color: #4deb31;
  }
`;

function NavBar(props) {
    return (
      <NavbarContainer>
        <BrandContainer src={BrandLogo}/>
        <AccessibilityContainer>
          <Button>Get Started</Button>
          <LoginButton>Login</LoginButton>
        </AccessibilityContainer>
      </NavbarContainer>
    );
}

export default NavBar;