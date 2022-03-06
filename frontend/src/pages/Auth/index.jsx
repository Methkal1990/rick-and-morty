import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import RickImage from "../../assets/auth.png";
import * as actions from "../../actions/auth";
import Form from "../../components/Form";

import {
  AuthContainer,
  AuthContainerBox,
  AuthTabs,
  AuthImageBox,
  AuthImage,
} from "./styles.js";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleRegister = async (name, password) => {
    await dispatch(actions.registerUser({ name, password }));
    navigate("/", { replace: true });
  };

  const handleLogin = async (name, password) => {
    await dispatch(actions.loginUser({ name, password }));
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <AuthContainer>
      <AuthContainerBox>
        {/* tabs */}
        <AuthTabs>
          <button
            onClick={() => {
              setIsLogin(true);
            }}
            className={isLogin ? "active" : ""}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
            }}
            className={!isLogin ? "active" : ""}
          >
            Register
          </button>
        </AuthTabs>
        {/* image */}
        <AuthImageBox>
          <AuthImage src={RickImage} />
        </AuthImageBox>
        {isLogin ? (
          <Form onSubmit={handleLogin} buttonLabel="Login" />
        ) : (
          <Form onSubmit={handleRegister} buttonLabel="Register" />
        )}
      </AuthContainerBox>
    </AuthContainer>
  );
}

export default Auth;
