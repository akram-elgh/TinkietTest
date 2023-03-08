import React from "react";
import Form from "./Form.jsx";
import axios from "axios";

export default function App() {
  function handleSubmit(fullInput, file) {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    axios.post("http://localhost:3001/api/uploads", formData);
    axios.post("http://localhost:3001/api", fullInput).then((res) => {
      if (res.status === 200) {
        alert("Application have been successfully submitted");
        window.location.reload();
      }
    });
  }
  return <Form onSubmit={handleSubmit}></Form>;
}
