import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 52vw;
  border-radius: 8px;
  margin-bottom: 3vw;
  height: 150px;
  padding: 0;
  text-decoration: none;
  color: black;

  @media screen and (min-width: 768px) {
    height: 200px;
    width: 55vw;
  }
`;

export const NameWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 8;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h3`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5vw;
  line-height: 2.8vw;
  text-align: left;
  margin-left: 1vw;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
  }
`;

export const ImgWrapper = styled.div`
  grid-area: 2 / 1 / 6 / 4;
  margin: 0;
  border-radius: 8px;
  height: 100%;
  background: orange;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  grid-area: 2 / 4 / 6 / 8;
  padding: 1vw;
  text-align: left;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5vw;
  line-height: 2.8vw;

  @media screen and (min-width: 768px) {
    text-align: right;
    font-size: 1.5vw;
    line-height: 1.8vw;
  }
`;

export const StarRating = styled.div`
  margin-left: 2vw;
  margin-bottom: -1vw;
`;

export const Star = styled.img`
width:100%
height: 100%;`;

export const RecipeType = styled.p`
  margin-left: 2vw;
  margin-bottom: -1vw;
`;

export const ServingSize = styled.p`
  margin-left: 2vw;
`;

export const LockWrapper = styled.div`
  width: 2vw;
  height: 2vw;
  float: right;
  margin-right: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Lock = styled.img`
  width: 100%;
  height: 100%;
`;
