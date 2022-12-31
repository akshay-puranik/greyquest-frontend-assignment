import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../03-pages/details_page/DetailsPage";
import HomePage from "../03-pages/home_page/HomePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/user/:id" element={<DetailsPage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
