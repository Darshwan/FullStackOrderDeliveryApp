// import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import SideBar from "./SideBar.jsx"
import Hero from "./Components/Hero/Hero.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Stats from "./Components/Stats/Stats.jsx";
import NewRecipes from "./Components/NewRecipes/NewRecipes.jsx";
import Chefs from "./Components/Chefs/Chefs.jsx";
import ProcessOfCrafting from "./Components/ProcessOfCrafting/ProcessOfCrafting.jsx";
import DiscountMenu from "./Components/Discount Menu/DiscountMenu.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ProductForHomePage from "./Components/Products/productForHomePage/ProductForHomePage.jsx"

export default function App() {
  return (
    <>
      <div className="navAndHero-container">
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/95/44/22/1000_F_695442216_wWTy0sqZcCjyjkQ4zRhZSIFhAuP7eAP8.jpg"
          alt="Image"
        />
        <div className="Black_bg">
          <div className="navbarAndSideBar navAndSideBar flex flex-row items-center justify-center gap-0">
          <Navbar />
          <SideBar />
          </div>
          <Hero />
        </div>
      </div>
      <Stats />
      <Categories />
      <NewRecipes />
      <Chefs />
      <ProductForHomePage />
      <DiscountMenu />
      <ProcessOfCrafting />
      <Signup />
      <Footer />
      {/* <Popular /> */}
    </>
  );
}
