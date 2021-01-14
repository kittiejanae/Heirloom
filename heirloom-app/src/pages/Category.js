import React, { Component } from "react";
import CategoryPage from "../CategoryComponents/CategoryPage";
import CloseDemo from "../components/CloseDemo/CloseDemo";
import DesktopMenu from "../components/DesktopMenu/DesktopMenu";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import RecipeCard from "../components/Recipes/RecipeCard";
import recipeData from "../components/Recipes/RecipeData";

class Category extends Component {
  state = {
    recipeData: recipeData,
    filteredList: recipeData,
  };

  handleAppetizer = () => {
    const appetizerList = recipeData.filter(
      (recipe) => recipe.type === "Appetizer"
    );
    this.setState({ filteredList: [appetizerList] });
  };

  render() {
    return (
      <>
        <CloseDemo />
        <Header />
        <Profile />
        <DesktopMenu recipeData={this.state.recipeData} />
        <CategoryPage filteredList={this.state.filteredList}>
          {this.state.filteredList.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </CategoryPage>
      </>
    );
  }
}

export default Category;
