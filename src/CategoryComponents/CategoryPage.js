import React from "react";
import RecipeCard from "../components/Recipes/RecipeCard";
import {
  PageContainer,
  PageTitle,
  CategoryContainer,
} from "./CategoryPageElements";

const CategoryPage = ({ filteredList, catTitle }) => {
  return (
    <>
      <PageContainer>
        <PageTitle>{catTitle}</PageTitle>
        <CategoryContainer filteredList={filteredList}>
          {filteredList.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              title={recipe.title}
              recipeImg={recipe.recipeImg}
              type={recipe.type}
              starRating={recipe.starRating}
              servingSize={recipe.servingSize}
              source={recipe.source}
            />
          ))}
        </CategoryContainer>
      </PageContainer>
    </>
  );
};

export default CategoryPage;
