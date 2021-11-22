import React from "react";
import { Carrousel } from "../components/Carrousel";
import { Category } from "../components/Category";
import { Footer } from "../components/Footer";
import { MoreSearch } from "../components/MoreSearch";

export const Home = () => {
  return (
    <>
      <Carrousel />
      <Category />
      <MoreSearch />
      <Footer />
    </>
  );
};
