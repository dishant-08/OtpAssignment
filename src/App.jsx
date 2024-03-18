import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./components/Main";
import More from "./components/More";
import Home from "./pages/Home";
import SidebarProvider from "./context/SidebarProvider";
import Java from "./components/Java";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        { path: "", element: <Main /> },
        { path: "more", element: <More /> },
        { path: "java", element: <Java /> },
      ],
    },
  ]);
  return (
    <>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </>
  );
};

export default App;
