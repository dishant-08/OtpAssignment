import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { isSideBarOpen, setSideBar } = useContext(SidebarContext);
  const navigate = useNavigate();
  if (!isSideBarOpen) return null;
  return (
    <div className=" w-40 md:w-52 bg-blue-400 h-screen flex flex-col font-bold gap-3 ">
      <button
        onClick={() => navigate("")}
        className=" flex mt-2 justify-center "
      >
        Home
      </button>
      <button
        onClick={() => navigate("java")}
        className=" flex  justify-center "
      >
        Java
      </button>
      <button
        onClick={() => navigate("more")}
        className=" flex justify-center "
      >
        More
      </button>
      {/* <div className=" flex justify-center ">jio</div> */}
    </div>
  );
};

export default SideBar;
