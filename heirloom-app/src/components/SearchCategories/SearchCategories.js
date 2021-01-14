import React from "react";
import {
  ScContainer,
  ScCardGridMobile,
  ScCard1,
  ScCard2,
  ScCard3,
  ScCard4,
  ScCard5,
  ScCardImg,
  ScCardGridDesktop,
  ScBigCard1,
  ScBigCard2,
  ScBigCard3,
  ScBigCard4,
  ScBigCard5,
  ScBigCardImg,
  CardName,
} from "./SearchCategoriesElements";
import FiveStarMobile from "../../images/5StarMobile.png";
import FamilyRecipeMobile from "../../images/FamilyRecipeMobile.png";
import VineMobile from "../../images/VineMobile.png";
import MyCreationsMobile from "../../images/MyCreationsMobile.png";
import StolenRecipesMobile from "../../images/StolenRecipesMobile.png";
import FiveStarDesktop from "../../images/5StarDesktop.png";
import FamilyRecipeDesktop from "../../images/FamilyRecipeDesktop.png";
import VineDesktop from "../../images/VineDesktop.png";
import MyCreationsDesktop from "../../images/MyCreationsDesktop.png";
import StolenRecipesDesktop from "../../images/StolenRecipesDesktop.png";

const SearchCategories = ({
  recipeData,
  fiveStarFilter,
  familyRecipeFilter,
  needsWorkFilter,
  myCreationsFilter,
  stolenRecipeFilter,
}) => {
  return (
    <>
      <ScContainer>
        <ScCardGridMobile>
          <ScCard1>
            <ScCardImg
              src={FiveStarMobile}
              type="image/png"
              onClick={() => fiveStarFilter()}
            />
            5 Star Dishes
          </ScCard1>
          <ScCard2>
            <ScCardImg
              src={FamilyRecipeMobile}
              type="image/png"
              onClick={() => familyRecipeFilter()}
            />
            Family Recipes
          </ScCard2>
          <ScCard3>
            <ScCardImg
              src={VineMobile}
              type="image/png"
              onClick={() => needsWorkFilter()}
            />
            Still on the Vine...
          </ScCard3>
          <ScCard4>
            <ScCardImg
              src={MyCreationsMobile}
              type="image/png"
              onClick={() => myCreationsFilter()}
            />
            My Creations
          </ScCard4>
          <ScCard5>
            <ScCardImg
              src={StolenRecipesMobile}
              type="image/png"
              onClick={() => stolenRecipeFilter()}
            />
            Stolen Recipes
          </ScCard5>
        </ScCardGridMobile>
        <ScCardGridDesktop>
          <ScBigCard1>
            <ScBigCardImg
              src={FiveStarDesktop}
              type="image/png"
              onClick={() => fiveStarFilter()}
            />
            <CardName>5 Star Dishes</CardName>
          </ScBigCard1>
          <ScBigCard2>
            <ScBigCardImg
              src={FamilyRecipeDesktop}
              type="image/png"
              onClick={() => familyRecipeFilter()}
            />
            <CardName>Family Recipes</CardName>
          </ScBigCard2>
          <ScBigCard3>
            <ScBigCardImg
              src={VineDesktop}
              type="image/png"
              onClick={() => needsWorkFilter()}
            />
            <CardName>Still on the Vine...</CardName>
          </ScBigCard3>
          <ScBigCard4>
            <ScBigCardImg
              src={MyCreationsDesktop}
              type="image/png"
              onClick={() => myCreationsFilter()}
            />
            <CardName>My Creations</CardName>
          </ScBigCard4>
          <ScBigCard5>
            <ScBigCardImg
              src={StolenRecipesDesktop}
              type="image/png"
              onClick={() => stolenRecipeFilter()}
            />
            <CardName>Stolen Recipes</CardName>
          </ScBigCard5>
        </ScCardGridDesktop>
      </ScContainer>
    </>
  );
};

export default SearchCategories;
