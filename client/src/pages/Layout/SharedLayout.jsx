import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <head>DashBoard</head>
      <main>
        <SideNavbar />
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
