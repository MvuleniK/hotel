// import { useState } from "react";
import * as React from "react";

const Dropdownguests = () => {
  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" }
  ];

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="drop-content">
      <Dropdown
        label="Number of Guests"
        options={options}
        value={value}
        onChange={handleChange}
      />

      {/* <p>We eat {value}!</p> */}
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdownguests;
