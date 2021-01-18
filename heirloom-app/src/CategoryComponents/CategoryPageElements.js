import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 72%;
  }
`;

export const PageTitle = styled.h2`
  text-align: center;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 4vw;
  line-height: 4.5vw;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
  width: 100%;
  height: 12vw;
  background-color: #ffdb0e;
  border-top: 2.8px solid black;
  border-bottom: 2.8px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 12vw;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 3vw;
`;
