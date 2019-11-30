import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        <Link to="/">Signout</Link>
      </button>
    </>
  );
};

export default Header;
