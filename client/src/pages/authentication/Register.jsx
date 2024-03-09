import React from "react";
import heroImage from "../../assets/heroImage3.jpg";

const Register = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <article className="bg-black h-[100vh] relative overflow-hidden w-[50vw]">
        <img
          className="w-full h-full object-fill"
          src={heroImage}
          alt="register"
        />
      </article>
      <article className="bg-gradient-to-b from-[#fae497] to-[#c1ffa7]  w-[50vw] flex flex-col items-center justify-center">
        <div className="w-[55%]  bg-[#fffefe5d] border border-white rounded-md  items-center py-4">
          <h1 className="text-3xl font-extrabold capitalize text-center mb-8 mt-8">
            Register
          </h1>
          <form className="flex flex-col gap-y-8 text-2xl md:text-3xl w-[75%] mr-auto ml-auto">
            <div>
              <input type="text" id="name" name="name" placeholder="Name" className="pl-4 py-2 rounded-md text-xl w-full" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder="Email" className="pl-4 py-2 rounded-md text-xl w-full" />
            </div>
            <div>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                className="pl-4 py-2 rounded-md text-xl w-full"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="pl-4 py-2 rounded-md text-xl w-full"
              />
            </div>
            <div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
                className="pl-4 py-2 rounded-md text-xl w-full"
              />
            </div>
            <button type="submit" className="bg-white text-black text-center w-1/2 self-center py-3 font-extrabold rounded-md text-xl mb-4 hover:bg-[#c8c7c74f] hover:w-[60%] transition-all">Sign Up</button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;
