import styled from "styled-components";

export const RpImageDiv = styled.div`
  width: 100%;
  height: 50vw;
  margin: 0vw;
  padding: 0;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 25vw;
  }
`;

export const RpImage = styled.img`
  width: 100%;
  height: 50vw;
  margin: 0vw;
  padding: 0;

  @media screen and (min-width: 768px) {
    height: 25vw;
  }
`;

export const StarRating = styled.div`
  bottom: 0;
  right: 2vw;
  position: absolute;

  @media screen and (min-width: 768px) {
    bottom: -3vw;
    right: 2vw;
  }
`;

export const Star = styled.img`
width:100%
height: 100%;`;

export const RpTitleDiv = styled.div`
  height: 15vw;
  width: 100%;
  border-top: 2.8px solid black;
  border-bottom: 2.8px solid black;
  margin-top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 8vw;
  }
`;

export const RpTitle = styled.h3`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 4.5vw;
  line-height: 4.8vw;
  text-align: left;
  margin-left: 2vw;
  margin-bottom: 0vw;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
  }
`;

export const RpDesc = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    width: 72%;
  }
`;

export const RpType = styled.p`
  width: 50%;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.75vw;
  text-align: left;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
  margin-left: 2vw;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.75vw;
  }
`;

export const RpServings = styled.p`
  width: 50%;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.8vw;
  text-align: right;
  margin-right: 2vw;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.75vw;
  }
`;
export const RpIngredients = styled.div`
  width: 100%;
  margin-top: 12vw;
  margin-left: 2vw;

  @media screen and (min-width: 768px) {
    margin-top: 6vw;
  }
`;

export const RpiTitle = styled.p`
  width: 100%;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.75vw;
  text-align: left;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.75vw;
  }
`;

export const RpdTitle = styled.p`
  width: 100%;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.75vw;
  text-align: left;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
  margin-top: 4vw;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.75vw;
    margin-left: 2vw;
  }
`;

export const RpiList = styled.ul`
  width: 100%;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.8vw;
  text-align: left;
  list-style: none;
  margin-left: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.75vw;
  }
`;

export const RpdList = styled.ul`
  width: 90%;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.8vw;
  text-align: left;
  list-style: decimal;
  padding: 0;
  margin-left: 7vw;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.75vw;
    width: 60%;
    margin-left: 3vw;
  }
`;

export const RpnList = styled.ul`
  width: 90%;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.8vw;
  text-align: left;
  padding: 0;
  margin-left: 5vw;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.75vw;
  }
`;

export const RpDirections = styled.div`
  width: 100%;
`;

export const RpNotes = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 72%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 72%;
  }
`;

export const CookSoloButton = styled.button`
  margin-bottom: 2vw;
  white-space: nowrap;
  padding: 5px 20px;
  background-color: #5a6832;
  color: #fff;
  border-radius: 8px;
  border: 1px solid #5a6832;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #5a6832;
    color: #5a6832;
  }

  @media screen and (min-width: 768px) {
    width: 14vw;
    font-size: 16px;
    line-height: 28px;
    margin-right: 0;
  }
`;

export const CookAssist = styled.button`
  margin-bottom: 4vw;
  margin-bottom: 2vw;
  white-space: nowrap;
  padding: 5px 20px;
  background-color: #fb7b00;
  color: #fff;
  border-radius: 8px;
  border: 1px solid #fb7b00;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #fb7b00;
    color: #fb7b00;
  }

  @media screen and (min-width: 768px) {
    width: 14vw;
    font-size: 16px;
    line-height: 28px;
    margin-right: 0;
  }
`;

export const LockDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5vw;
  margin-bottom: 5vw;
`;

export const RpLocked = styled.p`
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.75vw;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
`;

export const LockImage = styled.img`
  width: 30vw;
  height: auto;
`;
