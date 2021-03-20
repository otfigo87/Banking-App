import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const ArrowContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 5px solid #bff5ef;
  }
`;

const IconStyle = {
  color: "#868f8e",
  fontSize: "35px",
};

function DownArrow(){
    return (
      <div>
        <ArrowContainer>
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            style={IconStyle}
            
          />
        </ArrowContainer>
      </div>
    );
}

export default DownArrow;