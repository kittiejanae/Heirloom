import styled from "styled-components";

export const ScContainer = styled.div`
  width: 100%;
  height: 62vw;
  background-color: #ffdb0e;
  border-top: 2.8px solid black;
  border-bottom: 2.8px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 15vw;
  }
`;

export const ScCardGridMobile = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  text-align: center;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.3vw;
  line-height: 4vw;
  letter-spacing: 0.0075em;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ScCard1 = styled.div`
  grid-area: 2 / 1 / 4 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScCard2 = styled.div`
  grid-area: 2 / 3 / 4 / 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScCard3 = styled.div`
  grid-area: 2 / 5 / 4 / 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScCard4 = styled.div`
  grid-area: 4 / 2 / 6 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScCard5 = styled.div`
  grid-area: 4 / 4 / 6 / 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const ScCardImg = styled.img`
  width: 24vw;
  height: 22vw;
`;

export const ScCardGridDesktop = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 17vw;
  text-align: center;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3vw;
  line-height: 1.7vw;
  letter-spacing: 0.0075em;
  color: #fff;
  margin-top: 3.5vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ScBigCard1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScBigCard2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScBigCard3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScBigCard4 = styled.div`
  grid-area: 1 / 4 / 2 / 5;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const ScBigCard5 = styled.div`
  grid-area: 1 / 5 / 2 / 6;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const ScBigCardImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardName = styled.p`
  color: white;
  padding: 0;
  margin-top: -3.5vw;
  margin-left: 3vw;
  display: flex;
  width: 100%;
`;
