import styled from "styled-components";

import React from "react";
import Header from "./Header";

export default function SelectHostel() {
  return (
    <Container>
      <Header />
      <Box>
        <Content>
          <h2>SELECT YOUR HOSTEL</h2>
        </Content>
        <HostelBox>
          <Hostel1>
            <button>Hostel 1</button>
            <button>Hostel 2</button>
            <button>Hostel 3</button>
            <button>Hostel 4</button>
          </Hostel1>
          <Hostel2>
            <button>Hostel 5</button>
            <button>Hostel 6</button>
            <button>Hostel 7</button>
            <button>Hostel 8</button>
          </Hostel2>
          <Hostel3>
            <button>Hostel 9</button>
            <button>Hostel 10</button>
            <button>Hostel 11</button>
            <button>Hostel 12</button>
          </Hostel3>
        </HostelBox>
      </Box>
    </Container>
  );
}
const Container = styled.div`
  padding: 0;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const Content = styled.div`
  text-decoration: none;
  h2 {
    color: #d3d3d3;
  }
`;
const HostelBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 100px;
`;
const Hostel1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 1000px;
  button {
    min-width: 200px;
    min-height: 50px;
    font-size: 20px;
    font-weight: bolder;
    background: #1ed760;
    color: white;
    font-weight: 200px;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 100px;
    margin-left: 90px;
    cursor: pointer;
    transition-duration: 250ms;
    box-shadow: inset 0 0 0 1px rgba(3, 50, 24, 1);
    &:hover {
      background-color: rgba(0, 255, 120, 1);
      color: rgba(0, 0, 0, 0.9);
      text-decoration: none;
    }
  }
`;
const Hostel2 = styled(Hostel1)``;
const Hostel3 = styled(Hostel1)``;
