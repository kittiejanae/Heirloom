import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-height: 1000vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 35vw;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const SearchbarContainer = styled.input`
  width: 76vw;
  max-height: 8vw;
  border: 2.3px solid black;
  border-radius: 8px;
  text-indent: 8vw;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 4vw;
  margin-top: 2vw;

  &:focus {
    outline: none;
    border: 2.4px solid black;
    -webkit-box-shadow: 2px 5px 13px -5px #ffdb0e;
    box-shadow: 2px 5px 13px -5px #ffdb0e;
  }

  @media screen and (min-width: 768px) {
    width: 60vw;
    max-height: 4vw;
    text-indent: 4vw;
    border: 1.3px solid black;
    line-height: 2.5vw;
    font-size: 2vw;
    margin-left: 5vw;
  }
`;

export const Img = styled.img`
  width: 4vw;
  height: 4vw;
  display: flex;
  margin-right: 68vw;
  margin-top: -4.5vw;

  @media screen and (min-width: 768px) {
    width: 2vw;
    height: 2vw;
    margin-right: 0;
    margin-left: 6vw;
    margin-top: -2.3vw;
  }
`;

export const ResultsContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 4vw;
  text-align: center;
  margin: 0;
  padding-top: 2vw;
`;

export const AddButton = styled.button`
  width: 10vw;
  height: 10vw;
  background-color: #fb7b00;
  color: #fff;
  border-radius: 40px;
  border: none;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  margin-bottom: 8vw;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 110vw;
  right: 8vw;

  @media screen and (min-width: 768px) {
    display: none;
  }

  &:hover {
    background-color: #fff;
    border: 1px solid #fb7b00;
    color: #fb7b00;
  }

  &:focus {
    outline: none;
  }
`;
