import React, { useState } from "react";
import recipes from "./RecipeData";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import starImage from "../../images/star.svg";
import lockImage from "../../images/Lock.svg";
import { Modal } from "../../Modal/Modal";
import { GlobalStyle } from "../../Modal/globalStyles";
import {
  RpImageDiv,
  RpImage,
  RpTitleDiv,
  RpTitle,
  StarRating,
  Star,
  RpDesc,
  RpType,
  RpServings,
  RpIngredients,
  RpiTitle,
  RpiList,
  RpDirections,
  RpdList,
  RpNotes,
  RpnList,
  ButtonBox,
  CookSoloButton,
  CookAssist,
  RpLocked,
  LockImage,
  LockDiv,
} from "./RecipePageComp";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import CloseDemo from "../CloseDemo/CloseDemo";

function RecipePage(props) {
  const currentRecipe = recipes.find(
    (recipe) => recipe.id === Number(props.match.params.id)
  );

  function handleBorderColor() {
    if (currentRecipe.source === "My Creation") {
      return "#FB7B00";
    } else if (currentRecipe.source === "Family Recipe") {
      return "#ffdb0e";
    } else if (currentRecipe.source === "Stolen Recipe") {
      return "#E43B22";
    } else {
      return "black";
    }
  }

  const starCount = () => {
    let i = 0;
    let stars = [];
    while (i < currentRecipe.starRating) {
      i++;
      stars.push(<Star src={starImage} type="image/svg" />);
    }
    return stars;
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <CloseDemo />
      <Header />
      <Profile />
      <DesktopMenu
        recipeData={props.recipeData}
        handleAppetizer={props.handleAppetizer}
        handleSoup={props.handleSoup}
        handleSides={props.handleSides}
        handleSalad={props.handleSalad}
        handleMains={props.handleMains}
        handleDipsSauces={props.handleDipsSauces}
        handleDesserts={props.handleDesserts}
        handleDrinks={props.handleDrinks}
        handleMiscellaneous={props.handleMiscellaneous}
        handleReset={props.handleReset}
      />
      <RpImageDiv>
        <RpImage src={currentRecipe.recipeImg} />
        <StarRating starCount={starCount}>{starCount()}</StarRating>
      </RpImageDiv>
      <RpTitleDiv
        style={{
          backgroundColor: `${handleBorderColor()}`,
          boxShadow: `2px 5px 13px -5px ${handleBorderColor()}`,
        }}
      >
        <RpTitle>{currentRecipe.title}</RpTitle>
        <RpDesc>
          <RpType>{currentRecipe.source}</RpType>
          <RpServings>{currentRecipe.servingSize} Servings</RpServings>
        </RpDesc>
      </RpTitleDiv>
      {currentRecipe.locked === false && (
        <>
          <RpIngredients>
            <RpiTitle>Ingredients</RpiTitle>
            <RpiList>
              {currentRecipe.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </RpiList>
          </RpIngredients>
          <RpDirections>
            <RpTitle>Directions</RpTitle>
            <RpdList>
              {currentRecipe.directions.map((direction) => (
                <li style={{ marginBottom: "2vw" }}>{direction}</li>
              ))}
            </RpdList>
          </RpDirections>
          <RpNotes>
            <RpTitle>Chef's notes</RpTitle>
            <RpnList>
              {currentRecipe.notes.map((note) => (
                <li style={{ marginBottom: "2vw" }}>{note}</li>
              ))}
            </RpnList>
          </RpNotes>
        </>
      )}
      {currentRecipe.locked === true && (
        <LockDiv>
          <RpLocked>
            This recipe is for Sam's Eyes Only. Come back when you have the
            password.
          </RpLocked>
          <LockImage src={lockImage} type="image/svg" />
        </LockDiv>
      )}
      <ButtonBox>
        <CookSoloButton onClick={openModal}>Cook Solo</CookSoloButton>
        <CookAssist onClick={openModal}>Cook with Heirloom</CookAssist>
      </ButtonBox>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle />
    </>
  );
}

export default RecipePage;
