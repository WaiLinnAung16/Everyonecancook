import React, { useState } from "react";
import login from "../assets/login.svg";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  let [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/home", {
      state: { name: name, email: email },
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigateHandler();
  };

  const showHandler = () => {
    setShow((show = !show));
    let password = document.getElementById("password");
    show ? (password.type = "text") : (password.type = "password");
  };
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="signInCard">
        <div>
          <img src={login} alt="Login svg" className=" h-[300px]" />
        </div>

        <form
          onSubmit={(e) => onSubmitHandler(e)}
          className="w-[400px] flex flex-col gap-5"
        >
          <h1 className=" text-2xl font-bold">Sign In</h1>
          <div className="input-container">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              // ref={nameRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              id="name"
              placeholder="Anonymous"
              className="input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              // ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="input"
            />
          </div>
          <div className="input-container  relative">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              required
              id="password"
              placeholder="You and God know"
              className="input"
            />
            <AiOutlineEyeInvisible
              className={`passwordBtn ${!show ? "absolute" : "hidden"}`}
              onClick={() => showHandler()}
            />
            <AiOutlineEye
              className={`passwordBtn ${show ? "absolute" : "hidden"}`}
              onClick={() => showHandler()}
            />
          </div>
          <button className="btn" type="submit">
            SignIn
          </button>
          <p className=" text-sm text-center underline cursor-pointer">
            Now only God know?
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
