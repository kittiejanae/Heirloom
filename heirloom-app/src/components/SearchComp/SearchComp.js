import React from "react";
import {
  SearchContainer,
  SearchbarContainer,
  Img,
  ResultsContainer,
  AddButton,
} from "./SearchCompElements";
import SearchIcon from "../../images/SearchIcon.png";
import RecipeCard from "../Recipes/RecipeCard";

// const myCreationCardStyle = {
//   background: "red",
// };

// const familyCardStyle = {
//   background: "green",
// };

// const stolenCardStyle = {
//   background: "blue",
// };

// const cardStyling = this.recipes.map((recipe) => {
//   if (recipe.source === "My Creation") {
//     style = { myCreationCardStyle };
//   }
//   if (recipe.source === "Family Recipe") {
//     style = { familyCardStyle };
//   }
//   if (recipe.source === "Stolen Recipe") {
//     style = { stolenCardStyle };
//   }
// });

const SearchComp = ({ filteredList, handleSearch }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchContainer>
        <SearchbarContainer
          value=""
          type="text"
          onChange={() => handleSearch()}
        ></SearchbarContainer>
        <Img src={SearchIcon} type="image/png" />
        <ResultsContainer filteredList={filteredList}>
          {filteredList.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ResultsContainer>
      </SearchContainer>
      <AddButton>Add A New Recipe</AddButton>
    </>
  );
};

export default SearchComp;
