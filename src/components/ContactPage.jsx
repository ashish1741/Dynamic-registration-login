import React, { useState } from "react";
import FormField from "./FormField";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    number: "",
    address: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // If the input is a checkbox, use `checked` instead of `value`
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleVerification = () => {
    alert("Your Demo Account is Created")
  }
  return (
    <div className="p-2 w-[50%]">
      <div className="flex justify-between items-center my-2">
        <div className="p-2">
          <span
            className="cursor-pointer text-gray-600 font-medium"
            onClick={handleBack}
          >
            &#8592; Back To Home
          </span>
        </div>
        <div className="p-2">
          <span className="font-light text-gray-600 uppercase">
            Step 02 /02
          </span>
          <p className="font-bold text-gray-600">Personal Info</p>
        </div>
      </div>
      <div className="mt-6 p-2 ml-7 ">
        <h1 className="font-bold capitalize p-2 text-2xl text-black ">
          Complete Your Profile
        </h1>
        <p className="capitalize p-2 font-semibold text-gray-500">
          For the purpose of industry regulation, your <br /> details are
          required.
        </p>
      </div>
      <form className="flex flex-col gap-1 mt-3 ml-10 justify-between">
        <span className="text-gray-700 my-2 font-semibold">Phone Number</span>
        <FormField
          type="text"
          name="number"
          placeholder="e.g: +11"
          onChange={handleInputChange}
        />

        <span className="text-gray-700 my-2 font-semibold">Your Address</span>

        <FormField
          type="text"
          name="address"
          placeholder="e.g: Tx-200 "
          onChange={handleInputChange}
        />
        <span className="text-gray-700 my-2 font-semibold">Your Address</span>

        <FormField
          type="text"
          name="country"
          placeholder="e.g: Tx-200 "
          onChange={handleInputChange}
        />
      </form>
      <button
      onClick={handleVerification}
        className="ml-10 mt-10 shadow-md
     hover:bg-transparent hover:border-black
      hover:text-black text-center rounded-sm
       text-white font-bold p-2 bg-blue-900"
      >
        Save & Exist
      </button>
    </div>
  );
}

export default ContactPage;
