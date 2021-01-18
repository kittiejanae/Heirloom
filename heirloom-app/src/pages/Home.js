import React, { Component } from "react";
import About from "../components/HomeComponents/About/About";
import Demo from "../components/HomeComponents/Demo/Demo";
import CardSection from "../components/HomeComponents/CardSection/CardSection";
import { cardObjOne } from "../components/HomeComponents/CardSection/Data";
import Header from "../components/HomeComponents/Header/Header";
import Hero from "../components/HomeComponents/Hero/Hero";
import Contact from "../components/HomeComponents/Contact/Contact";
import Footer from "../components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <Demo />
        <CardSection {...cardObjOne} />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Home;
