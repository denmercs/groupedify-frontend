import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import schedule from "../images/schedule.svg";
import study from "../images/study.svg";
import profile from "../images/profile.svg";
import logout from "../images/logout.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <Link to="/dashboard">
            <h1 className="logo">GroupEdify</h1>
          </Link>
        </div>
        <div className="header-menu">
          <Link to="/schedule">
            <div className="header-schedule">
              <img src={schedule} alt="schedule-icon" />
              <p>schedule</p>
            </div>
          </Link>
          <Link to="/study">
            <div className="header-study">
              <img src={study} alt="study-icon" />
              <p>study</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className="header-profile">
              <img src={profile} alt="profile-icon" />
              <p>profile</p>
            </div>
          </Link>
        </div>
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          <div className="header-logout">
            <img src={logout} alt="logout-icon" />
            <p>logout</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
