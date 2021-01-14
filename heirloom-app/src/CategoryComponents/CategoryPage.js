import React from "react";
import RecipeCard from "../components/Recipes/RecipeCard";
import {
  PageContainer,
  PageTitle,
  CategoryContainer,
} from "./CategoryPageElements";

const CategoryPage = ({ filteredList }) => {
  return (
    <>
      <PageContainer>
        <PageTitle>Title</PageTitle>
        <CategoryContainer filteredList={filteredList}>
          {filteredList.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </CategoryContainer>
      </PageContainer>
    </>
  );
};

export default CategoryPage;
