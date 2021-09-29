import styled from "styled-components";
import React from "react";
import Header from "./Header";

export default function ShowComplains() {
  return (
    <Container>
      <Header />
      <Head>
        <div className="hostelHead">HOSTEL HEAD</div>
        <div className="hostelNumber">H-3 Complaints</div>
      </Head>
      <Complains>
        <h2>Name</h2>
        <h2>Hostel</h2>
        <h2>Room</h2>
        <h2>Issue</h2>
        <h2>Phone Number</h2>
        <span>Musa</span>
        <span>3</span>
        <span>65</span>
        <span>Router Configuration</span>
        <span>+920000000000</span>
        <span>Musa</span>
        <span>3</span>
        <span>65</span>
        <span>Router Configuration</span>
        <span>+920000000000</span>
      </Complains>
    </Container>
  );
}
const Container = styled.div`
  .Complaints {
    float: left;
    margin-left: 40px;
    color: #1ed760;
    margin-bottom: 20px;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hostelHead,
  .hostelNumber {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 50px;
    color: #d3d3d3;
  }
`;
const Complains = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  margin-top: 30px;
  h2 {
    color: #1ed760;
    margin-bottom: 10px;
  }
  span {
    color: #d3d3d3;
    margin-bottom: 10px;
  }
`;
