import React from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, UserPage } from "../pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/*** Rutas hijas */}
      <ul>
        <li>
          <NavLink to="lazy1">lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">lazy3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
