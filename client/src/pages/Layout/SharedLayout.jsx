import React from "react";
import SideNavbar from "../../components/SideNavbar";
import { Outlet } from "react-router-dom";
import logo from "../../../public/assets/logo.png";
import profileLogo from "../../../public/assets/profileLogo.png";

const SharedLayout = () => {
  return (
    <div className="h-[100vh]">
      <header className="bg-[#3b3b3b] text-[#fff69a] h-[4.5rem] flex justify-between items-center ">
        <div className="flex justify-center items-center text-white text-2xl font-bold pl-2">
          <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
          <h1>AgriSense</h1>
        </div>
        <div className="text-3xl font-extrabold uppercase text-center">
          Dashboard
        </div>
        <div className="mr-4">
          <img src={profileLogo} alt="profile" className="w-[40px] h-[40px]" />
        </div>
        </header>
      <main className="flex h-[calc(100vh-4.5rem)]">
        <SideNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
