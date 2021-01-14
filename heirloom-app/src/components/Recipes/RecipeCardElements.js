import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 300px;
  border-radius: 8px;
  margin-bottom: 3vw;
`;

export const NameWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 8;
`;

export const Name = styled.h3`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: left;
`;

export const ImgWrapper = styled.div`
  grid-area: 2 / 1 / 6 / 4;
  margin-left: 1vw;
  padding-bottom: 1vw;
  border-radius: 8px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  grid-area: 2 / 4 / 6 / 8;
`;

export const StarRating = styled.div`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: left;
  margin-left: 2vw;
  margin-bottom: -1.5vw;
`;

export const RecipeType = styled.p`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: left;
  margin-left: 2vw;
  margin-bottom: -1.5vw;
`;

export const ServingSize = styled.p`
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: left;
  margin-left: 2vw;
  margin-bottom: -1.5vw;
`;
