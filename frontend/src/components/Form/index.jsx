import React, { useState } from "react";

import { AuthForm } from "./styles";

function Form({ onSubmit, buttonLabel }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, password);
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button>{buttonLabel}</button>
    </AuthForm>
  );
}

export default Form;
