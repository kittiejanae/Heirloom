import React from "react";
import {
  Container,
  NameWrapper,
  Name,
  ImgWrapper,
  Img,
  TextWrapper,
  StarRating,
  ServingSize,
  RecipeType,
} from "./RecipeCardElements";

const RecipeCard = ({ recipe }) => {
  let { title, type, recipeImg, starRating, servingSize } = recipe;
  return (
    <>
      <Container>
        <NameWrapper>
          <Name>{title}</Name>
        </NameWrapper>
        <ImgWrapper>
          <Img src={recipeImg} />
        </ImgWrapper>
        <TextWrapper>
          <StarRating>{starRating} Stars</StarRating>
          <RecipeType>{type}</RecipeType>
          <ServingSize>{servingSize} Serving</ServingSize>
        </TextWrapper>
      </Container>
    </>
  );
};

export default RecipeCard;
