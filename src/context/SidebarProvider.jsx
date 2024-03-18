import React, { useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarProvider = ({ children }) => {
  const [isSideBarOpen, setSideBar] = useState(true);
  return (
    <SidebarContext.Provider
      value={{
        isSideBarOpen,
        setSideBar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
