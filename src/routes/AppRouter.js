import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CategorySubpage } from "../components/CategorySubpage";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { CategoryPage } from "../pages/CategoryPage";
import { Home } from "../pages/Home";
import { MoreSearchPage } from "../pages/MoreSearchPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />}>
          <Route path=":categoryId" element={<CategorySubpage />} />
          {/* <Route path=":analgesicosId" element={<CategorySubpage />} />
          <Route path="anti-histaminicos" />
          <Route path="anti-inflamatorios" />
          <Route path="antibioticos" /> */}
        </Route>
        <Route path="/moreSearch" element={<MoreSearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
