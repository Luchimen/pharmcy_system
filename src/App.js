import React from "react";
import { Carrousel } from "./components/Carrousel";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { MoreSearch } from "./components/MoreSearch";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Carrousel />
      <Category />
      <MoreSearch />
      <Footer />
    </div>
  );
};

export default App;
