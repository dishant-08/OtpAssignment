import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
// import Button from "./commonComponents/Button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSideBarOpen, setSideBar } = useContext(SidebarContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   console.log(isSideBarOpen);

  return (
    <header
      style={{ boxShadow: "0px 0px 12px 0px #1026490F" }}
      className="p-4 bg-blue-100 w-screen  "
    >
      <div className="container flex justify-between h-16 mx-auto">
        <button
          //   rel="noopener noreferrer"
          //   href="#"
          aria-label="SideBar"
          onClick={() => {
            setSideBar(!isSideBarOpen);
          }}
          className="flex items-center p-2  "
        >
          {/* Your logo/svg goes here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul className=" items-stretch text-black space-x-3 md:flex hidden ">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              About 1
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              About 2
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
            >
              About 3
            </a>
          </li>
          {/* <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              Link
            </a>
          </li> */}
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              {/* <Button variant="solidBlue" text="Get Started" /> */}
            </a>
          </li>
        </ul>
        <button
          onClick={toggleMenu}
          className="flex justify-end z-10  p-4 md:hidden"
        >
          <svg
            width="30px"
            height="40px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            class="bi bi-three-dots-vertical"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
        <div className=" absolute top-[4rem]  right-2 ">
          {isMenuOpen && (
            <div className="xl:hidden rounded-xl bg-gray-900 text-white p-4">
              <ul className="flex flex-col space-y-4">
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    About 1
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    About 2
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
                  >
                    About 3
                  </a>
                </li>
                {/* <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    Link
                  </a>
                </li> */}
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    {/* <Button variant="solidBlue" text="Get Started" /> */}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default NavBar;
