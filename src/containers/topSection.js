import React from 'react';
import styled from 'styled-components';
import BackgroundImg from "../assets/pictures/backgroundimg1.jpg";
import Logo from '../components/logo';
import Button from '../components/button';
import DownArrow from '../components/downArrow';
import NavBar from "../components/navBar";
import { scroller, Element } from 'react-scroll';


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.5em;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-color: rgba(55, 55, 55, 0.89);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const WelcomeText = styled.h1`
  margin: 0;
  font-size: 26px;
  font-weght: bold;
  color: #bff5ef;
  margin: 1em;
  text-align: center;
  line-height: 1.2;
`;

const DownArrowContainer = styled.div`
position: absolute;
bottom: 10px;
left: 50%;
transform: translateX(-50%);
`;

const scrollToNextSection = () => {
  scroller.scrollTo("servicesSection", {smooth: true, duration: 1500});
}

function TopSection(props){
    return (
      <Element name="topSection">
        <TopContainer>
          <NavBar/>
          <Logo />
          <WelcomeText>
            Free Dolla account that puts you in control and stays out of the
            way, because a bank should never come between you and your money.
          </WelcomeText>
          <Button>Free Account</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </TopContainer>
      </Element>
    );
}

export default TopSection;