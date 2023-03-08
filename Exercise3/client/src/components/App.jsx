import React from "react";
import Form from "./Form.jsx";
import axios from "axios";

export default function App() {
  function handleSubmit(fullInput) {
    axios.post("http://localhost:3001/api", fullInput);
  }
  return <Form onSubmit={handleSubmit}></Form>;
}
