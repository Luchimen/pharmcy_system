import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
        <Route path="category" element={<CategoryPage />} />
        <Route path="moreSearch" element={<MoreSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};
