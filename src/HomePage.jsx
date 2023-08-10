import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PropertyCards from "./components/PropertyCards";
import homeData from "./mocks/homeData";

import { IoIosArrowDown } from "react-icons/io";
import "./HomePage.scss";
import AllFilters from "./components/AllFilters";

function HomePage() {
  const [allHomeData, setAllHomeData] = useState(homeData);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <div className="header-content">Search properties to rent</div>
          <div className="input-div">
            <input type="text" placeholder="Search with Search Bar " />
            <IoIosArrowDown className="abs-icon" />
          </div>
        </div>{" "}
        <AllFilters setAllHomeData={setAllHomeData} />
        <div className="card-grid">
          {allHomeData.map((data, index) => (
            <PropertyCards key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
