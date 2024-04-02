import React from "react";
import logo from "../../../public/assets/logo.png";
/* import heroImage from "../../../public/assets/heroImage.jpg"; */
import { Link } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
const Landing = () => {
  const { user } = useFirebase();
  return (
    <>
      <header className="flex justify-between items-center h-[4.5rem] pr-[2rem]">
        <div className="flex justify-center items-center  text-2xl font-bold pl-2">
          <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
          <h1>AgriSense</h1>
        </div>
        <div className="flex gap-x-[4rem] text-[1.2rem]">
          <div className="hover:text-[#204e51] hover:border hover:border-[#204e51] border border-white px-4 py-2 rounded-md transition-all">
            Home
          </div>
          <div className="hover:text-[#204e51] hover:border hover:border-[#204e51] border border-white px-4 py-2 rounded-md transition-all">
            About Us
          </div>
          <div className="hover:text-[#204e51] hover:border hover:border-[#204e51] border border-white px-4 py-2 rounded-md transition-all">
            Reviews
          </div>
        </div>
        <div className="flex gap-x-4 text-[1.1rem]">
          {user ? (
            <Link
              to="/dashboard"
              className="bg-[#204e51] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#204e51] hover:border hover:border-[#204e51] transition-all"
            >
              Dashboard
            </Link>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="bg-[#204e51] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#204e51] hover:border hover:border-[#204e51] transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md border border-[#204e51] hover:bg-[#204e51] hover:text-white transition-all"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="bg-hero-image bg-cover h-[calc(100vh-4.5rem)]">
        <section className="bg-[#00000070] h-full flex justify-center">
          <div className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-4xl md:text-8xl text-white font-extrabold flex flex-col">
              <div>Revolutionizing <span className="text-[#47e371]">Agriculture</span></div> 
              <div className="text-center">with the Power of</div>
              <div className="text-center text-[#47e371]">Technology</div> 
            </h1>
            <Link to="/register" className="bg-white text-[#204e51] text-center w-1/4 self-center py-3 font-extrabold rounded-md text-xl mb-4 hover:bg-[#c8c7c74f] hover:w-[40%] transition-all mt-8">
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
