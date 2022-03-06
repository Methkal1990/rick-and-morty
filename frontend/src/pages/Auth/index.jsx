import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as actions from "../../actions/auth";

import {
  AuthContainer,
  AuthContainerBox,
  AuthForm,
  AuthTabs,
} from "./styles.jsx";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await dispatch(actions.registerUser({ name, password }));
    navigate("/", { replace: true });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(actions.loginUser({ name, password }));
    navigate("/", { replace: true });
  };

  return (
    <AuthContainer>
      <AuthContainerBox>
        {/* tabs */}
        <AuthTabs>
          <button
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Register
          </button>
        </AuthTabs>
        {isLogin ? (
          <AuthForm onSubmit={handleLogin}>
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
            <button>Login</button>
          </AuthForm>
        ) : (
          <AuthForm onSubmit={handleRegister}>
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
            <button>Register</button>
          </AuthForm>
        )}
      </AuthContainerBox>
    </AuthContainer>
  );
}

export default Auth;
