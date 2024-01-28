/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
function OtpInput({ length = 4, onOtpSubmit = () => {} }) {
  const [otp, setOtpt] = useState(new Array(length).fill(""));

  console.log(otp);

  const handleChange = () => {};
  const handleClick = () => {};
  const handleKeyDown = () => {};

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
}

export default OtpInput;
