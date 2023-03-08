import React, { useState } from "react";

export default function Form(props) {
  // Creating the state object for the input fields
  const [fullInput, setFullInput] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Description: "",
  });
  const { firstName, lastName, Email, Description } = fullInput;
  // Creating the state object for the file
  const [file, setFile] = useState(null);
  // Fybction to handle change of the file
  const handleFileChange = (event) => {
    const [file] = event.target.files;
    setFile(file);
  };
  // Function to handle the change of the input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setFullInput((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }
  return (
    <form
      onSubmit={(event) => {
        if (
          (!file.name.endsWith(".pdf") && !file.name.endsWith(".docx")) ||
          file == null
        ) {
          alert("Please choose pdf or docx file");
          setFile(null);
        } else {
          props.onSubmit(fullInput, file);
          setFullInput({
            firstName: "",
            lastName: "",
            Email: "",
            Description: "",
          });
          setFile(null);
        }
        event.preventDefault();
      }}
      className="form"
    >
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
      <input
        onChange={handleFileChange}
        className="file-input"
        type="file"
        name="file"
      ></input>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
