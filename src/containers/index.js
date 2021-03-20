import React from 'react';
import styled from "styled-components";
import TopSection  from "./topSection";

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
            </PageContainer>
        </div>
    )
}

export default Homepage;