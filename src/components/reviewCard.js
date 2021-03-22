import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  height: 440px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  padding: 10px 1.2em;
`;

const QuoteIcon = styled.div`
position: absolute;
top: 13px; 
left: 17px;
color: grey;
font-size: 40px;
`;

const ReviewText = styled.p`
  font-size: 20px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  margin-top: 140px;
  background-color: #cdcdcd;
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 18px;
  color: #000;
`;



function ReviewCard({ reviewText, username, userImgUrl }){
    return(
        <CardContainer>
            <QuoteIcon>
                <FontAwesomeIcon icon={faQuoteLeft} />
            </QuoteIcon>
            <ReviewText>{ reviewText }</ReviewText>
            <Line/>
            <UserDetails>
                <UserImg src={userImgUrl} />
                <Username>{username}</Username>
            </UserDetails>
        </CardContainer>
    );
}

export default ReviewCard;