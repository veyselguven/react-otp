/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = () => {};
  return (
    <div>
      <form onSubmit={() => {}}>
        <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
      </form>
    </div>
  );
}

export default PhoneOtpForm;
