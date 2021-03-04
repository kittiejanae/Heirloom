import React, { useState } from "react";
import {
  SearchContainer,
  SearchbarContainer,
  Img,
  ResultsContainer,
  AddButton,
} from "./SearchCompElements";
import SearchIcon from "../../images/SearchIcon.png";
import RecipeCard from "../Recipes/RecipeCard";
import { GlobalStyle } from "../../Modal/globalStyles";
import { Modal } from "../../Modal/Modal";

function SearchComp({ filteredList, handleSearch, searchList }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <SearchContainer>
        <SearchbarContainer
          value={searchList}
          type="text"
          onChange={handleSearch}
        ></SearchbarContainer>
        <Img src={SearchIcon} type="image/png" />
        <ResultsContainer filteredList={filteredList}>
          {filteredList.map((recipe) => (
            // <RecipeCard key={recipe.id} recipe={recipe} />
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              recipeImg={recipe.recipeImg}
              type={recipe.type}
              starRating={recipe.starRating}
              servingSize={recipe.servingSize}
              source={recipe.source}
              locked={recipe.locked}
            />
          ))}
        </ResultsContainer>
      </SearchContainer>
      <AddButton onClick={openModal}>+</AddButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle />
    </>
  );
}

export default SearchComp;
