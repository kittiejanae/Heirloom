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
    catTitle: "Sam's Cookbook",
  };

  handleAppetizer = () => {
    const appetizerList = recipeData.filter(
      (recipe) => recipe.type === "Appetizer"
    );
    this.setState({ filteredList: appetizerList });
    this.setState({ catTitle: "Appetizer" });
  };

  handleSoup = () => {
    const soupList = recipeData.filter((recipe) => recipe.type === "Soup");

    this.setState({ filteredList: soupList });
    this.setState({ catTitle: "Soup" });
  };

  handleSalad = () => {
    const saladList = recipeData.filter((recipe) => recipe.type === "Salad");

    this.setState({ filteredList: saladList });
    this.setState({ catTitle: "Salad" });
  };

  handleSides = () => {
    const sidesList = recipeData.filter((recipe) => recipe.type === "Sides");

    this.setState({ filteredList: sidesList });
    this.setState({ catTitle: "Sides" });
  };

  handleMains = () => {
    const mainsList = recipeData.filter((recipe) => recipe.type === "Mains");

    this.setState({ filteredList: mainsList });
    this.setState({ catTitle: "Mains" });
  };

  handleDipsSauces = () => {
    const dipsSaucesList = recipeData.filter(
      (recipe) => recipe.type === "Dips & Sauces"
    );

    this.setState({ filteredList: dipsSaucesList });
    this.setState({ catTitle: "Dips & Sauces" });
  };

  handleDesserts = () => {
    const dessertsList = recipeData.filter(
      (recipe) => recipe.type === "Desserts"
    );

    this.setState({ filteredList: dessertsList });
    this.setState({ catTitle: "Desserts" });
  };

  handleDrinks = () => {
    const drinksList = recipeData.filter((recipe) => recipe.type === "Drinks");

    this.setState({ filteredList: drinksList });
    this.setState({ catTitle: "Drinks" });
  };

  handleMiscellaneous = () => {
    const miscellaneousList = recipeData.filter(
      (recipe) => recipe.type === "Miscellaneous"
    );

    this.setState({ filteredList: miscellaneousList });
    this.setState({ catTitle: "Miscellaneous" });
  };

  handleReset = () => {
    this.setState({ filteredList: recipeData });
    this.setState({ catTitle: "Sam's Cookbook" });
  };

  render() {
    return (
      <>
        <CloseDemo />
        <Header />
        <Profile handleReset={this.handleReset} />
        <DesktopMenu
          recipeData={this.state.recipeData}
          handleAppetizer={this.handleAppetizer}
          handleSoup={this.handleSoup}
          handleSides={this.handleSides}
          handleSalad={this.handleSalad}
          handleMains={this.handleMains}
          handleDipsSauces={this.handleDipsSauces}
          handleDesserts={this.handleDesserts}
          handleDrinks={this.handleDrinks}
          handleMiscellaneous={this.handleMiscellaneous}
          handleReset={this.handleReset}
        />
        <CategoryPage
          filteredList={this.state.filteredList}
          catTitle={this.state.catTitle}
        >
          {this.state.filteredList.map((recipe) => (
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
        </CategoryPage>
      </>
    );
  }
}

export default Category;
