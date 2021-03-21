const { default: styled } = require("styled-components");

const SectionTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #000;
  margin-bottom: 50px;
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export default SectionTitle;
