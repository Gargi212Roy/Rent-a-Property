import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import "../styles/Dropdowns.scss";
function Dropdowns({
  label,
  options,
  selectedOption,
  onClick,
  showDropdown,
  setShowDropdown,
}) {
  return (
    <div className="options">
      <div
        className="options"
        onClick={() =>
          setShowDropdown({ ...showDropdown, [label]: !showDropdown[label] })
        }
      >
        {selectedOption || `Select ${label}`}{" "}
        <IoIosArrowDown className="filter-icons" />
      </div>
      {showDropdown[label] && (
        <div className="dropdown">
          {options.map((option, index) => (
            <div
              className="dropdown-options"
              key={index}
              onClick={() => onClick(option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdowns;
