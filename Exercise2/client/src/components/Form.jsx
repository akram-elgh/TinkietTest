import React, { useState } from "react";

export default function Form() {
  const [fullInput, setFullInput] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Description: "",
  });
  const { firstName, lastName, Email, Description } = fullInput;
  function handleChange(event) {
    const { name, value } = event.target;
    setFullInput((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    console.log(fullInput);
    setFullInput({ firstName: "", lastName: "", Email: "", Description: "" });
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="input"
        placeholder="First name"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        className="input"
        placeholder="Last name"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        className="input"
        placeholder="Email"
        name="Email"
        value={Email}
        onChange={handleChange}
      ></input>
      <textarea
        type="email"
        className="input text-area"
        placeholder="About you"
        rows="2"
        name="Description"
        value={Description}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
