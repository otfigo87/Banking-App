import React from 'react';
import styled from "styled-components";
import TopSection  from "./topSection";
import ServicesSection from "./servicesSection";
import ReviewsSection from './reviewSection';

const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

function Homepage(props){
    return(
        <div>
            <PageContainer>
                <TopSection/>
                <ServicesSection/>
                <ReviewsSection/>
            </PageContainer>
        </div>
    )
}

export default Homepage;