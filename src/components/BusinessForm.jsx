import React, { useState } from 'react'
import FormField from './FormField'
import { useNavigate } from 'react-router-dom';






function BusinessForm() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [FormData, setFormData] = useState({
    fullname: "",
    password: "",
    accept: false,
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

  const handleShow = () => {
    setShow(!show);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleRegisterAccount = () => {
    navigate("/contactPage")
  }
  return (
    <div className="p-2 w-[50%]">
    <div className="flex justify-between items-center my-2">
      <div className="p-2">
        <span
          className="cursor-pointer text-gray-600 font-medium"
          onClick={handleBack}
        >
          &#8592; Back
        </span>
      </div>
      <div className="p-2">
        <span className="font-light text-gray-600 uppercase">
          Step 01 /02
        </span>
        <p className="font-bold text-gray-600">Personal Info</p>
      </div>
    </div>
    <div className="mt-6 p-2 ml-7 ">
      <h1 className="font-bold capitalize p-2 text-2xl text-black ">
        Register Business Account!
      </h1>
      <p className="capitalize p-2 font-semibold text-gray-500">
        For the purpose of industry regulation, your <br /> details are
        required.
      </p>
    </div>
    <form className="flex flex-col gap-1 mt-3 ml-10 justify-between">
      <span className="text-gray-700 my-2 font-semibold">
        Your Full Name *
      </span>
      <FormField
        type="text"
        name="fullname"
        placeholder="e.g: Joe Smith"
        onChange={handleInputChange}
      />

      <span className="text-gray-700 my-2 font-semibold">
        Email Address *
      </span>

      <FormField
        type="email"
        name="email"
        placeholder="e.g: Joe@gmail.com"
        onChange={handleInputChange}
      />

      <span className="text-gray-700 my-2 font-semibold">Password *</span>
      <div className="relative w-[100%]">
        <FormField
          type={show ? "text" : "password"}
          name="password"
          placeholder="e.g: XXXXXXXX"
          onChange={handleInputChange}
        />

        <span
          className="absolute top-[15px] right-[330px] cursor-pointer font-semibold text-gray-900"
          onClick={handleShow}
        >
          {show ? "Hide" : "Show"}
        </span>
      </div>

      <div className="flex items-center my-2">
        <FormField
          type="checkbox"
          name="accept"
          onChange={handleInputChange}
          checked={FormData.accept}
        />
        <label className="text-gray-700 font-semibold">
          I agree to the terms and conditions
        </label>
      </div>
    </form>
    <button  onClick={handleRegisterAccount} className='ml-10 mt-2 shadow-md hover:bg-transparent hover:border-black hover:text-black text-center rounded-sm text-white font-bold p-2 bg-blue-900'>Register Account &#8594;</button>
  </div>
  )
}



export default BusinessForm