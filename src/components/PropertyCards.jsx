import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBath, BiBed } from "react-icons/bi";
import { BsApp, BsHouseDoorFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

import "../styles/PropertyCard.scss";

function PropertyCards({ data }) {
  useEffect(() => {
    console.log(data.moveInDate.toISOString().substring(0, 10));
  }, []);

  return (
    <div className="card-container">
      <img className="img-property" src={data.propertyImg} alt="" />
      <div className="prop-details">
        <div className="rent-div">
          <p>
            ${data.rentAmt} <span className="txt-small"> /month</span>
          </p>
          <AiOutlineHeart className="img-like" />
        </div>
        <p className="prop-name">{data.propertyName}</p>
        <p className="prop-address">{data.propertyAddress}</p>
        <div className="divider"></div>
        <div className="prop-info">
          <div>
            <BiBed color="#661d9f" /> {data.noOfBeds} Beds
          </div>
          <div>
            {" "}
            <BiBath color="#661d9f" /> {data.noOfBathrooms} Bathrooms
          </div>
          <div>
            <BsApp color="#661d9f" /> {data.propertySize} sq. m
          </div>
        </div>
        <div className="prop-info" style={{ marginTop: "0.2rem" }}>
          <div>
            {" "}
            <SlCalender color="#661d9f" />{" "}
            {data.moveInDate.toISOString().substring(0, 10)}
          </div>
          <div>
            <BsHouseDoorFill color="#661d9f" /> {data.propertyType}
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
