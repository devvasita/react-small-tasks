import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    country: "",
    interests: [],
    birthDate: "",
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isVaildPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) && 
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isVaildAge = (age) => {
    return parseInt(age) > 10 && parseInt(age) < 100;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    let updatedInterests = [...formData.interests];

    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interests) => interests !== name
      );
    }

    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phonenumber is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phonenumber must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isVaildPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password and confirm password must match";
    }

    if (!isVaildAge(formData.age)) {
      newErrors.age = "Age should be greater then 10 and less then 100";
    }

    if (!formData.gender) {
      newErrors.gender = "Please Select Gender";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Select at least one interest";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "Date of birth is required";
    }

    if (!formData.country) {
      newErrors.country  = "Please select Country";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isvaild = validateForm();

    if (isvaild) {
      console.log("Form submmitted");
    } else {
      console.log("Not submitted");
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-3 p-5">
        {/* First Name */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="firstName" className="w-34 text-right">
            First Name:
          </label>
          <input
            className="input input-sm focus:outline-0 w-full max-w-md"
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter Your First Name"
            onChange={handleChange}
          />
          {errors.firstName && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="lastName" className="w-34 text-right">
            Last Name:
          </label>
          <input
            className="input input-sm focus:outline-0 w-full max-w-md"
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Enter Your Last Name"
            onChange={handleChange}
          />
          {errors.lastName && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.lastName}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="email" className="w-34 text-right">
            Email:
          </label>
          <input
            className="input input-sm focus:outline-0 w-full max-w-md"
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
          {errors.email && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phonenumber */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="phoneNumber" className="w-34 text-right">
            phoneNumber:
          </label>
          <input
            className="input input-sm focus:outline-0 w-full max-w-md"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Enter Your phoneNumber"
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="password" className="w-34 text-right">
            Password:
          </label>
          <input
            className="input input-sm focus:outline-0 w-full max-w-md"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Your password"
            onChange={handleChange}
          />
          {errors.password && (
            <div className="text-red-500 text-sm">{errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="confirmPassword" className="w-34 text-right">
            Confirm Password:
          </label>
          <input
            className="input input-sm focus:outline-0 w-full max-w-md"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Enter Your confirmPassword"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
          )}
        </div>

        {/* Age */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="age" className="w-34 text-right">
            Age:
          </label>
          <input
            className="input input-sm focus:outline-0 w-full max-w-md"
            type="number"
            name="age"
            value={formData.age}
            placeholder="Enter Your age"
            onChange={handleChange}
          />
          {errors.age && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.age}
            </p>
          )}
        </div>

        {/* to check gender */}
        <div className="flex items-center gap-2 w-full">
          <label className="w-34 text-right">Gender:</label>

          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="male"
                className="radio radio-sm"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              <span>Male</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="female"
                className="radio radio-sm"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />

              <span>Female</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="other"
                className="radio radio-sm"
                checked={formData.gender === "other"}
                onChange={handleChange}
              />
              <span>Other</span>
            </label>
          </div>

          {errors.gender && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.gender}
            </p>
          )}
        </div>

        {/* to select country */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="country" className="w-34 text-right">
            Country:
          </label>
          <select
            name="country"
            className="select select-neutral select-sm  w-full max-w-md focus:outline-0 "
            value={formData.country} 
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>
          {errors.country && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.country
            </p>
          )}
        </div>

        {/* Checkbox for interests */}
        <div className="flex items-center gap-4 w-full">
          <label className="w-34 text-right">Intrests:</label>

          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                name="coding"
                className="checkbox checkbox-sm"
                checked={formData.interests.includes("coding")}
                onChange={handleCheckboxChange}
              />
              <span>Coding</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                name="sports"
                className="checkbox checkbox-sm"
                checked={formData.interests.includes("sports")}
                onChange={handleCheckboxChange}
              />

              <span>Sports</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                name="reading"
                className="checkbox checkbox-sm"
                checked={formData.interests.includes("reading")}
                onChange={handleCheckboxChange}
              />
              <span>Reading</span>
            </label>
          </div>
          {errors.interests && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.interests}
            </p>
          )}
        </div>

        {/* birthdate */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="birthDate" className="w-34 text-right">
            birthDate:
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            className="input input-sm focus:outline-0 focus-within:outline-0 w-full max-w-md"
            onChange={handleChange}
            min="1900-01-01"
            max="2031-12-31"
          />
          {errors.birthDate && (
            <p
              className="text-red-500 text-sm
            "
            >
              {errors.birthDate}
            </p>
          )}
        </div>

        <div className="flex justify-center ">
          <button className="btn btn-primary  w-full" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
