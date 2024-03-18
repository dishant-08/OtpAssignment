import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex  ">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
