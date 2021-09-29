import styled from "styled-components";
import Header from "./Header";
import useFetch from "./useFetch";
import React, { useState, useEffect } from "react";

import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    error,
    isPending,
    data: hostelHead,
  } = useFetch("https://complaintronix.herokuapp.com/api/heads?email=" + email);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            email: user.email,
          })
        );
        history.push("/");
      }
    });
  }, []);

  // Handle Google login function // firebase auth
  const handleGoogleLogin = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          email: user.email,
        })
      );
      history.push("/");
    });
  };

  // Handle Email / pass login function // firebase auth
  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        let user = result;
        dispatch(
          setUserLogin({
            email: user.email,
          })
        );
        history.push("/");
      })
      .catch((err) => {
        alert("Error Loggoing");
      });
    console.log("Hostel Head", hostelHead);
  };

  //Register Function // Email // Password

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert("Email Already Registered");
      });
  };

  /// Request to get hostel head status

  return (
    <Container>
      <Header />
      <Box>
        <SignInBox>
          <h2>SIGN IN</h2>
          <Form>
            <label htmlFor="Email">Email ID</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <LoginButton onClick={handleLogin}>Log In</LoginButton>
            <Register onClick={register}>Register</Register>
          </Form>
          <FgLogin>
            <p>OR LOGIN WITH</p>
            <button> f </button>
            <button onClick={handleGoogleLogin}> g </button>
          </FgLogin>
        </SignInBox>
      </Box>
    </Container>
  );
}
const Container = styled.div`
  padding: 0;
  margin-left: 40px;
  overflow: hidden;
  overflow-y: hidden;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
`;
const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: center;
  padding: 50px 10px;
  border: 2px solid #1ed760;
  box-sizing: border-box;
  border-radius: 25px;
  justify-content: center;
  color: #d3d3d3;
  margin-top: 60px;
  margin-left: 300px;
  h2 {
    font-size: 20px;
    color: #1ed760;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  @media (max-width: 760px) {
    margin-left: 0;
  }
`;

const Form = styled.form`
  input {
    border-radius: 25px;
    border-color: #1ed760;
    border-width: 2px;
    box-sizing: border-box;
    height: 30px;
    color: #d3d3d3;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }
  label {
    padding: 10px 10px;
    text-align: left;
    display: block;
    color: #d3d3d3;
  }
  input[type="text"]:focus {
    border: 3px solid #d3d3d3;
  }
  input[type="password"]:focus {
    border: 3px solid #d3d3d3;
  }
`;
const LoginButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1ed760;
  color: white;
  font-weight: 200px;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90px;
  margin-left: 90px;
  cursor: pointer;
  transition-duration: 250ms;
  box-shadow: inset 0 0 0 1px rgba(3, 50, 24, 1);
  &:hover {
    background-color: rgba(0, 255, 120, 1);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const FgLogin = styled.div`
  p {
    color: #d3d3d3;
  }

  button {
    flex-direction: column;
    border: 2px solid #1ed760;
    background-color: black;
    color: #1ed760;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: blod;
    font-size: 30px;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 40%;
    transition-duration: 250ms;
    box-shadow: inset 0 0 0 1px rgba(3, 50, 24, 1);
    &:hover {
      background-color: rgba(0, 255, 120, 1);
      color: rgba(0, 0, 0, 0.9);
      text-decoration: none;
    }
  }
`;
const Register = styled(LoginButton)``;
