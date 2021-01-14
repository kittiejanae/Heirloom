import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 35vw;
    align-items: flex-start;
  }
`;

export const SearchbarContainer = styled.input`
  width: 76vw;
  max-height: 8vw;
  border: 2.3px solid black;
  border-radius: 8px;
  text-indent: 12vw;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 4vw;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
    border: 2.4px solid black;
    -webkit-box-shadow: 2px 5px 13px -5px #ffdb0e;
    box-shadow: 2px 5px 13px -5px #ffdb0e;
  }

  @media screen and (min-width: 768px) {
    width: 60vw;
    max-height: 4vw;
    text-indent: 6vw;
    border: 1.3px solid black;
    line-height: 2.5vw;
    font-size: 2vw;
    margin-left: 4vw;
  }
`;

export const Img = styled.img`
  width: 5vw;
  height: 5vw;

  @media screen and (min-width: 768px) {
    width: 2.5vw;
    height: 2.5vw;
  }
`;

export const ResultsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 4vw;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }
`;

export const AddButton = styled.button`
  width: 47vw;
  height: 8.5vw;
  margin-left: 27vw;
  margin-right: 27vw;
  top: 135vw;
  background-color: #fb7b00;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  margin-bottom: 4vw;

  @media screen and (min-width: 768px) {
    display: none;
  }

  &:hover {
    background-color: #fff;
    border: 1px solid #fb7b00;
    color: #fb7b00;
  }
`;
