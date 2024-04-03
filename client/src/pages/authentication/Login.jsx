import React from "react";
import heroImage from "/assets/heroImage3.jpg";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";

const Login = () => {
  const { login } = useFirebase();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = initialValues;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await login({ ...initialValues });
      console.log(resp);
      toast.success("Login Successfull", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInitialValues({ ...initialValues, [name]: value });
  };
  return (
    <section className="flex flex-col md:flex-row-reverse">
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
            Welcome Back !
          </h1>
          <form className="flex flex-col gap-y-8 text-2xl md:text-3xl w-[75%] mr-auto ml-auto">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                className="pl-4 py-2 rounded-md text-xl w-full"
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
                name="password"
                placeholder="password"
                className="pl-4 py-2 rounded-md text-xl w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-black text-center w-1/2 self-center py-3 font-extrabold rounded-md text-xl mb-4 hover:bg-[#c8c7c74f] hover:w-[60%] transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
