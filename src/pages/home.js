import React from "react";
import Login from "../components/auth/login";
import Register from "../components/auth/register";

const Home = () => {
  return (
    <>
      <h3>Home Page</h3>
      <div>
        <Login />
      </div>
      <div>
        <h5>Create New Account</h5>
        <p>It's quick and easy. Start your devotion immediately.</p>
        <Register />
      </div>
    </>
  );
};

export default Home;
