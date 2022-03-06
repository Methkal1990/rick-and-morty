import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;

  input {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #333;
    width: 100%;
  }

  button {
    margin-top: 20px;
    padding: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #fff;
    background-color: #333;
    cursor: pointer;
    width: 100%;
  }
`;
