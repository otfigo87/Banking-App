import React from "react";
import styled from "styled-components";
import Button  from "./button";
import BrandLogo from "../assets/logo/cornerLogo.png";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

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


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  
  render() {
    return (
      <>
        <NavbarContainer>
          <BrandContainer src={BrandLogo} />
          <AccessibilityContainer>
            <Button>Get Started</Button>
            <LoginButton onClick={this.toggleModal}>Login</LoginButton>
          </AccessibilityContainer>
        </NavbarContainer>

        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          size="lg"
        >
          <ModalHeader
            className="my-modal text-white"
            color="white"
            toggle={this.toggleModal}
          >
            Login
          </ModalHeader>
          <ModalBody className="my-modal text-white">
            <Form>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username or Email"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" />
                  Remember me
                </Label>
              </FormGroup>
              {<br></br>}
              <Button type="submit" value="submit" color="primary">
                Sign In
              </Button>{" "}
              <Button type="submit" color="primary">
                Register
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default NavBar;