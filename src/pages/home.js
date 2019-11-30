import React from "react";
import Login from "../components/auth/login";
import Register from "../components/auth/register";

const Home = () => {
  return (
    <>
      <h3>Welcome to your Bible App</h3>
      <Login />
      <Register />
    </>
  );
};

export default Home;
