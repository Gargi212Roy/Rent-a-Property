import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import homeData from "../mocks/homeData";
import Dropdowns from "./Dropdowns";

import "../styles/AllFilters.scss";

const priceRanges = [
  { start: 500, end: 1000, label: "500 - 1000" },
  { start: 1001, end: 1500, label: "1001 - 1500" },
  { start: 1501, end: 2000, label: "1501 - 2000" },
  { start: 2001, end: 2500, label: "2001 - 2500" },
];

const propertyTypes = [
  { label: "Houses" },
  { label: "PentHouses" },
  { label: "Villa" },
  { label: "Bungalow" },
];

const locationTypes = [
  { label: "Highland Lake" },
  { label: "Westside City" },
  { label: "Riverdale" },
  { label: "Maplewood" },
  { label: "Bloomville" },
];

function AllFilters({ setAllHomeData }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedLocationType, setSelectedLocationType] = useState("");
  const [allFilters, setAllFilters] = useState({});
  const [showDropdown, setShowDropdown] = useState({
    price: false,
    property: false,
    location: false,
  });
  const [selectedButton, setSelectedButton] = useState("Search");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAllFilters({ ...allFilters, date: date });
  };

  const handlePriceChange = (priceRange) => {
    const start = parseInt(priceRange.split(" - ")[0]);
    const end = parseInt(priceRange.split(" - ")[1]);
    setAllFilters({ ...allFilters, priceRange: { start, end } });
    setShowDropdown({ ...showDropdown, price: false });
    setSelectedPriceRange(`${start} - ${end}`);
  };

  const handlePropertyChange = (propertyType) => {
    setAllFilters({ ...allFilters, propertyType });
    setSelectedPropertyType(propertyType);
    setShowDropdown({ ...showDropdown, property: false });
  };

  const handleLocationChange = (locationType) => {
    setAllFilters({ ...allFilters, locationType });
    setSelectedLocationType(locationType);
    setShowDropdown({ ...showDropdown, location: false });
  };

  const handleSearch = () => {
    const filteredData = homeData.filter((data) => {
      const dataDate = new Date(data.moveInDate);
      const rentAmt = data.rentAmt;
      const isDateMatch =
        !selectedDate ||
        (dataDate.getDate() === selectedDate.getDate() &&
          dataDate.getMonth() === selectedDate.getMonth() &&
          dataDate.getFullYear() === selectedDate.getFullYear());

      const isPriceRangeMatch =
        !allFilters.priceRange ||
        (rentAmt >= allFilters.priceRange.start &&
          rentAmt <= allFilters.priceRange.end);

      const isPropertyTypeMatch =
        !selectedPropertyType || data.propertyType === selectedPropertyType;

      const isLocationTypeMatch =
        !selectedLocationType ||
        data.propertyAddress.includes(selectedLocationType);

      return (
        isDateMatch &&
        isPriceRangeMatch &&
        isPropertyTypeMatch &&
        isLocationTypeMatch
      );
    });
    console.log(filteredData);
    setAllHomeData(filteredData);
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedPriceRange("");
    setSelectedPropertyType("");
    setSelectedLocationType("");
    setAllFilters({});
    setShowDropdown({
      price: false,
      property: false,
      location: false,
    });
    setAllHomeData(homeData);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="filter-container">
      <div className="filter-content">
        <div className="filter">
          <div className="txt-grey">When</div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date(2023, 7, 9)}
            maxDate={new Date(2023, 7, 31)}
            dateFormat="dd/MM/y"
            customInput={
              <div className="options">
                {selectedDate
                  ? formatDate(selectedDate)
                  : "Select Move-in Date"}{" "}
                <IoIosArrowDown className="filter-icons" />
              </div>
            }
            popperPlacement="bottom-start"
            popperModifiers={{
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: "viewport",
              },
            }}
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter">
          {" "}
          <div className="txt-grey"> Price</div>
          <Dropdowns
            label="price"
            options={priceRanges}
            selectedOption={selectedPriceRange}
            onClick={handlePriceChange}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter">
          <div className="txt-grey"> Property Type</div>
          <Dropdowns
            label="property"
            options={propertyTypes}
            selectedOption={selectedPropertyType}
            onClick={handlePropertyChange}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter">
          {" "}
          <div className="txt-grey"> Location</div>
          <Dropdowns
            label="location"
            options={locationTypes}
            selectedOption={selectedLocationType}
            onClick={handleLocationChange}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </div>
      </div>
      <div>
        <button
          className={`search-button ${
            selectedButton === "Search" ? "selected-btn" : ""
          }`}
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className={`search-button ${
            selectedButton === "Reset" ? "selected-btn" : ""
          }`}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default AllFilters;
