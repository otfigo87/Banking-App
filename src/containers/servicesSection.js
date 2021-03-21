import React from 'react';
import styled from "styled-components";
import { Element } from "react-scroll";
import SectionTitle from "../components/sectionTitle";
import OurService from "../components/ourService";

import serviceImg1 from "../assets/pictures/serviceImg1.jpg";
import serviceImg2 from "../assets/pictures/serviceImg2.jpg";
import serviceImg3 from "../assets/pictures/serviceImg3.jpg";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

function ServicesSection(props){
    return (
      <ServicesContainer name="servicesSection">
        <SectionTitle>Best Quality Services</SectionTitle>
        <OurService
          title="No Monthly Maintenance Fees"
          description="No monthly fees, No minimum balance requirements and No transaction minimums, DollarBank is a Free Checking account."
          imgUrl={serviceImg1}
        />
        <OurService
          title="Unlimited 2% Cash Back "
          description="You’ll always be rewarded with our card, Take your rewards as a statement credit, pay yourself back for purchases or make direct deposits in to a DollarBank. "
          imgUrl={serviceImg2}
          isReversed
        />
        <OurService
          title="Online & Mobile Banking"
          description="Online and mobile banking has just about everything you can do in a branch, without the branch. Sign on for 24/7 account access.  "
          imgUrl={serviceImg3}
        />
      </ServicesContainer>
    );
}

export default ServicesSection;