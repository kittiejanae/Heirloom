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
    searchText: "",
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
    this.setState({ searchText: event.target.value }, () => {
      const searchList = recipeData.filter((recipe) =>
        this.searchFn(recipe, this.state.searchText)
      );
      this.setState({ filteredList: searchList });
    });
  };

  searchFn = (recipe, searchText) => {
    return (
      recipe.title.toLowerCase().includes(searchText.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  handleAppetizer = () => {
    const appetizerList = recipeData.filter(
      (recipe) => recipe.type === "Appetizer"
    );

    this.setState({ filteredList: appetizerList });
  };

  handleSoup = () => {
    const soupList = recipeData.filter((recipe) => recipe.type === "Soup");

    this.setState({ filteredList: soupList });
  };

  handleSalad = () => {
    const saladList = recipeData.filter((recipe) => recipe.type === "Salad");

    this.setState({ filteredList: saladList });
  };

  handleSides = () => {
    const sidesList = recipeData.filter((recipe) => recipe.type === "Sides");

    this.setState({ filteredList: sidesList });
  };

  handleMains = () => {
    const mainsList = recipeData.filter((recipe) => recipe.type === "Mains");

    this.setState({ filteredList: mainsList });
  };

  handleDipsSauces = () => {
    const dipsSaucesList = recipeData.filter(
      (recipe) => recipe.type === "Dips & Sauces"
    );

    this.setState({ filteredList: dipsSaucesList });
  };

  handleDesserts = () => {
    const dessertsList = recipeData.filter(
      (recipe) => recipe.type === "Desserts"
    );

    this.setState({ filteredList: dessertsList });
  };

  handleMiscellaneous = () => {
    const miscellaneousList = recipeData.filter(
      (recipe) => recipe.type === "Miscellaneous"
    );

    this.setState({ filteredList: miscellaneousList });
  };

  handleHomeReset = () => {
    this.setState({ filteredList: recipeData });
  };

  render() {
    return (
      <>
        <CloseDemo />
        <Header handleHomeReset={this.handleHomeReset} />
        <Profile />
        <DesktopMenu
          handleAppetizer={this.handleAppetizer}
          handleSoup={this.handleSoup}
          handleSides={this.handleSides}
          handleMains={this.handleMains}
          handleDipsSauces={this.handleDipsSauces}
          handleDesserts={this.handleDesserts}
          handleDrinks={this.handleDrinks}
          handleMiscellaneous={this.handleMiscellaneous}
        />
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
          searchList={this.state.searchList}
          handleSearch={this.handleSearch}
        />
      </>
    );
  }
}

export default AppDemo;
