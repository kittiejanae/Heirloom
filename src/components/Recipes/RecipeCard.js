import React from "react";
import {
  Container,
  NameWrapper,
  Name,
  ImgWrapper,
  Img,
  TextWrapper,
  StarRating,
  Star,
  ServingSize,
  RecipeType,
  LockWrapper,
  Lock,
} from "./RecipeCardElements";
import starImage from "../../images/star.svg";
import lockImage from "../../images/Lock.svg";

const RecipeCard = (props) => {
  function handleBorderColor() {
    if (props.source === "My Creation") {
      return "#FB7B00";
    } else if (props.source === "Family Recipe") {
      return "#ffdb0e";
    } else if (props.source === "Stolen Recipe") {
      return "#E43B22";
    } else {
      return "black";
    }
  }

  const starCount = () => {
    let i = 0;
    let stars = [];
    while (i < props.starRating) {
      i++;
      stars.push(<Star src={starImage} type="image/svg" />);
    }
    return stars;
  };

  // function onLocked() {
  //   let isLocked = true;
  //   if (isLocked === props.locked) {
  //     return <Lock src={lockImage} type="image/svg" />;
  //   }
  // }

  return (
    <>
      <Container
        style={{
          border: `3px solid ${handleBorderColor()}`,
          boxShadow: `2px 5px 13px -5px ${handleBorderColor()}`,
        }}
      >
        <NameWrapper
          style={{
            backgroundColor: `${handleBorderColor()}`,
          }}
        >
          <Name>{props.title}</Name>
          <LockWrapper>
            {props.locked ? <Lock src={lockImage} type="image/svg" /> : null}
          </LockWrapper>
        </NameWrapper>
        <ImgWrapper>
          <Img src={props.recipeImg} />
        </ImgWrapper>
        <TextWrapper>
          <StarRating starCount={starCount}>{starCount()}</StarRating>
          <RecipeType>{props.type}</RecipeType>
          <ServingSize>{props.servingSize} Servings</ServingSize>
        </TextWrapper>
      </Container>
    </>
  );
};

export default RecipeCard;
