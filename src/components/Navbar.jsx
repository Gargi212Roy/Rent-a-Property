import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiHouseFill } from "react-icons/pi";
import "../styles/Navbar.scss";

function Navbar() {
  const navbarData = [
    { label: "Rent" },
    { label: "Buy" },
    { label: "Manage Property", icon: <IoIosArrowDown className="icon" /> },
    { label: "Resources", icon: <IoIosArrowDown className="icon" /> },
  ];

  const [selectedLabel, setSelectedLabel] = useState(null);
  const [selectedButton, setSelectedButton] = useState("Login");

  return (
    <div className="navbar-container">
      <div className="all-sections">
        <PiHouseFill className="rent-icon icon" /> Estatery
        <div>
          {navbarData.map((item, index) => (
            <div
              className={`navbar-data ${
                selectedLabel === item.label ? "selected" : ""
              }`}
              key={index}
              onClick={() => setSelectedLabel(item.label)}
            >
              {" "}
              {item.label}
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <div className="log-in-section">
        <div
          className={`navbar-button ${
            selectedButton === "Login" ? "selected-btn" : ""
          }`}
          onClick={() => setSelectedButton("Login")}
        >
          Login
        </div>
        <div
          className={`navbar-button ${
            selectedButton === "Sign up" ? "selected-btn" : ""
          }`}
          onClick={() => setSelectedButton("Sign up")}
        >
          Sign up
        </div>
      </div>
    </div>
  );
}

export default Navbar;
