import React, { useState } from "react";
import NewRecipeIcon from "../../images/NewRecipeIcon.png";
import SettingsIcon from "../../images/SettingsIcon.png";
import { GlobalStyle } from "../../Modal/globalStyles";
import { Modal } from "../../Modal/Modal";
import {
  DesktopMenuContainer,
  CookBookMenuContainer,
  CookBookHeader,
  CookBookList,
  CookbookListItem,
  FunctionList,
  FunctionListItem,
  FunctionIcon,
  FunctionName,
} from "./DesktopMenuElements";
import { withRouter } from "react-router-dom";

function DesktopMenu({
  handleAppetizer,
  handleSoup,
  handleSalad,
  handleSides,
  handleMains,
  handleDipsSauces,
  handleDesserts,
  handleDrinks,
  handleMiscellaneous,
  handleReset,
  match,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  console.log(match);
  return (
    <>
      <DesktopMenuContainer>
        <CookBookMenuContainer>
          <CookBookHeader to="/Category" onClick={handleReset}>
            Sam's Cookbook
          </CookBookHeader>
          {match.path === "/Category" && (
            <CookBookList>
              <CookbookListItem
                className="Appetizer"
                to="/Category"
                onClick={handleAppetizer}
              >
                Appetizer
              </CookbookListItem>
              <CookbookListItem
                className="Soup"
                to="/Category"
                onClick={handleSoup}
              >
                Soup
              </CookbookListItem>
              <CookbookListItem className="Salad" onClick={handleSalad}>
                Salad
              </CookbookListItem>
              <CookbookListItem
                className="Sides"
                to="/Category"
                onClick={handleSides}
              >
                Sides
              </CookbookListItem>
              <CookbookListItem
                className="Mains"
                to="/Category"
                onClick={handleMains}
              >
                Mains
              </CookbookListItem>
              <CookbookListItem
                className="DipsNSauces"
                to="/Category"
                onClick={handleDipsSauces}
              >
                Dips & Sauces
              </CookbookListItem>
              <CookbookListItem
                className="Desserts"
                to="/Category"
                onClick={handleDesserts}
              >
                Desserts
              </CookbookListItem>
              <CookbookListItem
                className="Drinks"
                to="/Category"
                onClick={handleDrinks}
              >
                Drinks
              </CookbookListItem>
              <CookbookListItem
                className="Miscellaneous"
                to="/Category"
                onClick={handleMiscellaneous}
              >
                Miscellaneous
              </CookbookListItem>
            </CookBookList>
          )}
          <FunctionList>
            <FunctionListItem onClick={openModal}>
              <FunctionIcon src={NewRecipeIcon} type="image/png" />
              <FunctionName>Add A New Recipe</FunctionName>
            </FunctionListItem>
            <FunctionListItem onClick={openModal}>
              <FunctionIcon src={SettingsIcon} type="image/png" />
              <FunctionName>Settings</FunctionName>
            </FunctionListItem>
          </FunctionList>
        </CookBookMenuContainer>
      </DesktopMenuContainer>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle />
    </>
  );
}

export default withRouter(DesktopMenu);
