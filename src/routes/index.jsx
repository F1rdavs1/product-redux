import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Liked, Saved, OrderedPage } from "../pages";

function CustomRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/order" element={<OrderedPage />} />
    </Routes>
  );
}

export default CustomRoute;
