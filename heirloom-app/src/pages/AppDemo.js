import React, { Component } from "react";
import DesktopMenu from "../components/DesktopMenu/DesktopMenu";
import Header from "../components/Header/Header";
import SearchCategories from "../components/SearchCategories/SearchCategories";
import SearchComp from "../components/SearchComp/SearchComp";
import Profile from "../components/Profile/Profile";
import recipeData from "../components/Recipes/RecipeData";
import CloseDemo from "../components/CloseDemo/CloseDemo";

class AppDemo extends Component {
  state = {
    recipeData: recipeData,
    filteredList: recipeData,
  };

  fiveStarFilter = () => {
    const fiveStarList = recipeData.filter((recipe) => recipe.starRating === 5);
    this.setState({ filteredList: fiveStarList });
  };

  familyRecipeFilter = () => {
    const familyRecipeList = recipeData.filter(
      (recipe) => recipe.source === "Family Recipe"
    );

    this.setState({ filteredList: familyRecipeList });
  };

  needsWorkFilter = () => {
    const needsWorkList = recipeData.filter((recipe) => recipe.starRating <= 2);

    this.setState({ filteredList: needsWorkList });
  };

  myCreationsFilter = () => {
    const myCreationList = recipeData.filter(
      (recipe) => recipe.source === "My Creation"
    );

    this.setState({ filteredList: myCreationList });
  };

  stolenRecipeFilter = () => {
    const stolenRecipeList = recipeData.filter(
      (recipe) => recipe.source === "Stolen Recipe"
    );

    this.setState({ filteredList: stolenRecipeList });
  };

  handleSearch = (event) => {
    const searchList = recipeData.filter(
      (recipe) => recipe.ingredients === event.target.value
    );
    this.setState({ filteredList: searchList });
  };

  render() {
    return (
      <>
        <CloseDemo />
        <Header />
        <Profile />
        <DesktopMenu />
        <SearchCategories
          recipeData={this.state.recipeData}
          fiveStarFilter={this.fiveStarFilter}
          familyRecipeFilter={this.familyRecipeFilter}
          needsWorkFilter={this.needsWorkFilter}
          myCreationsFilter={this.myCreationsFilter}
          stolenRecipeFilter={this.stolenRecipeFilter}
        />
        <SearchComp
          filteredList={this.state.filteredList}
          handleSearch={this.handleSearch}
        />
      </>
    );
  }
}

export default AppDemo;
