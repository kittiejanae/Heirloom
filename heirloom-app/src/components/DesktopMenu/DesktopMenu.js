import React from "react";
import NewRecipeIcon from "../../images/NewRecipeIcon.png";
import SettingsIcon from "../../images/SettingsIcon.png";
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

const DesktopMenu = ({ handleAppetizer }) => {
  return (
    <>
      <DesktopMenuContainer>
        <CookBookMenuContainer>
          <CookBookHeader to="/AppDemo">Sam's Cookbook</CookBookHeader>
          <CookBookList>
            <CookbookListItem
              className="Appetizer"
              to="/Category"
              onClick={() => handleAppetizer()}
            >
              Appetizer
            </CookbookListItem>
            <CookbookListItem className="Soup" to="/Category">
              Soup
            </CookbookListItem>
            <CookbookListItem className="Salad" to="/Category">
              Salad
            </CookbookListItem>
            <CookbookListItem className="Sides" to="/Category">
              Sides
            </CookbookListItem>
            <CookbookListItem className="Mains" to="/Category">
              Mains
            </CookbookListItem>
            <CookbookListItem className="DipsNSauces" to="/Category">
              Dips & Sauces
            </CookbookListItem>
            <CookbookListItem className="Desserts" to="/Category">
              Desserts
            </CookbookListItem>
            <CookbookListItem className="Drinks" to="/Category">
              Drinks
            </CookbookListItem>
            <CookbookListItem className="Miscellaneous" to="/Category">
              Miscellaneous
            </CookbookListItem>
          </CookBookList>
          <FunctionList>
            <FunctionListItem>
              <FunctionIcon src={NewRecipeIcon} type="image/png" />
              <FunctionName>Add A New Recipe</FunctionName>
            </FunctionListItem>
            <FunctionListItem>
              <FunctionIcon src={SettingsIcon} type="image/png" />
              <FunctionName>Settings</FunctionName>
            </FunctionListItem>
          </FunctionList>
        </CookBookMenuContainer>
      </DesktopMenuContainer>
    </>
  );
};

export default DesktopMenu;
