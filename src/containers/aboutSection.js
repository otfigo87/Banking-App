import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import SectionTitle from '../components/sectionTitle';
import Button from "../components/button";
import AboutImgUrl from '../assets/pictures/about.jpg';



const AboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  background-color: #1f1f1f;
`;

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 850px;
  margin-bottom: 2em;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: row;
  }
`;

const AboutText = styled.p`
font-size: 21px;
color: grey;
font-weight: normal;
line-height: 1.4;
color: white;
`;

const AboutImg = styled.img`
  width: 400px;
  height: 400px;
  margin-left: 2em;
  border-radius: 5px;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;



function AboutSection(props){
    return (
      <AboutContainer>
        <SectionTitle>More About DollaBank</SectionTitle>
        <AboutDiv>
          <AboutText>
            We’re committed to helping clients and communities thrive. To us,
            that means doing business fairly and responsibly, promoting
            diversity and inclusion, and making meaningful investments in the
            places where we live and work. We’re proud of our progress, and
            we’re not slowing down.{<br />}At DollaBank, we value diversity, are
            committed to equity and foster inclusion throughout our business,
            from the teammates we hire and the clients we serve, to the
            suppliers we use and the communities that welcome us. Every employee
            is engaged with and committed to our goals.
          </AboutText>
          <AboutImg src={AboutImgUrl} />
        </AboutDiv>
        <Button>Read Our Latest Responsibility Report</Button>
      </AboutContainer>
    );
}

export default AboutSection;