import styled from "styled-components";
import React from "react";
import Header from "./Header";
export default function ComplaintForm() {
  return (
    <Container>
      <Header />
      <Box>
        <SignInBox>
          <h2>Register Complain</h2>
          <Form>
            <label>Name</label>
            <input type="text" required></input>
            <label>Registration Number</label>
            <input type="text" required></input>
            <label>Room Number</label>
            <input type="text" required></input>
            <label>Phone Number</label>
            <input type="text" required></input>
          </Form>
          <RadioForm>
            <p>Complain type</p>
            <Radio1>
              <input type="radio" />
              <label>Ethernet Cable Damaged</label>
            </Radio1>
            <Radio1>
              <input type="radio" />
              <label>Router Configuration</label>
            </Radio1>
            <Radio1>
              <input type="radio" />
              <label>Crimpping Issue</label>
            </Radio1>
            <Radio1>
              <input type="radio" />
              <label>No Ethernet Cable </label>
            </Radio1>
          </RadioForm>
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
  border: 5px solid #1ed760;
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
const Form = styled.div`
  input {
    border-radius: 25px;
    border-color: #1ed760;
    border-width: 3px;
    box-sizing: border-box;
    height: 30px;
    color: #d3d3d3;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }
  input[type="text"]:focus {
    border: 3px solid #d3d3d3;
  }
  p {
    padding: 10px 10px;
    text-align: left;
    color: #d3d3d3;
  }
  label {
    padding: 10px 10px;
    text-align: left;
    display: block;
    color: #d3d3d3;
  }
`;
const RadioForm = styled(Form)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Radio1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
  input:checked + label {
    color: #1ed760;
  }
  input:checked {
    color: #1ed760;
  }
`;
