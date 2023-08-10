import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBath, BiBed } from "react-icons/bi";
import { BsApp, BsHouseDoorFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

import "../styles/PropertyCard.scss";

function PropertyCards({ homeData }) {
  return (
    <div className="card-container">
      <img className="img-property" src={homeData.propertyImg} alt="" />
      <div className="prop-details">
        <div className="rent-div">
          <p>
            ${homeData.rentAmt} <span className="txt-small"> /month</span>
          </p>
          <AiOutlineHeart className="img-like" />
        </div>
        <p className="prop-name">{homeData.propertyName}</p>
        <p className="prop-address">{homeData.propertyAddress}</p>
        <div className="divider"></div>
        <div className="prop-info">
          <div>
            <BiBed color="#661d9f" /> {homeData.noOfBeds} Beds
          </div>
          <div>
            {" "}
            <BiBath color="#661d9f" /> {homeData.noOfBathrooms} Bathrooms
          </div>
          <div>
            <BsApp color="#661d9f" /> {homeData.propertySize} sq. m
          </div>
        </div>
        <div className="prop-info" style={{ marginTop: "0.2rem" }}>
          <div>
            {" "}
            <SlCalender color="#661d9f" />{" "}
            {`${homeData.moveInDate.getDate()}/${
              homeData.moveInDate.getMonth() + 1
            }/${homeData.moveInDate.getFullYear()}`}
          </div>
          <div>
            <BsHouseDoorFill color="#661d9f" /> {homeData.propertyType}
          </div>
        </div>
      </div>
      <div className="postion-tag">
        <div className="tag">Popular</div>
        <div className="inverted-div"></div>
      </div>
    </div>
  );
}

export default PropertyCards;
