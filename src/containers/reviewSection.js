import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import SectionTitle from "../components/sectionTitle";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import ReviewCard from "../components/reviewCard";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../assets/pictures/profile_picture_1.jpg";
import User2Img from "../assets/pictures/profile_picture_2.jpg";
import User3Img from "../assets/pictures/profile_picture_3.jpg";
import User4Img from "../assets/pictures/profile_picture_4.jpeg";


const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 70%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: grey;
  }
`;

function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer>
      <SectionTitle>What people are saying about us</SectionTitle>
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText="I must admit I use it almost as a secondary bank. There savings account offers very competitive rate, You also can't go wrong with the no fee checking. "
              username="John Adam"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText="I very much enjoyed working with DollaBank and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John Adam"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText="I very much enjoyed working with DollaBankand the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John Adam"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText="I very much enjoyed working with DollaBank and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John Adam"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}

export default ReviewsSection;
