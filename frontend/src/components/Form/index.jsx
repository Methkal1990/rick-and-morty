import React, { useState } from "react";

import { AuthForm } from "./styles";

function Form({ onSubmit, buttonLabel }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || name.length > 20) {
      return setErrorMessage("Name must be between 3 and 20 characters");
    }
    if (password.length < 8 || password.length > 20) {
      return setErrorMessage("Password must be between 8 and 20 characters");
    }
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
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button>{buttonLabel}</button>
    </AuthForm>
  );
}

export default Form;
