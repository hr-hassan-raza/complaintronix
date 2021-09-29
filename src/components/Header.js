import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <Container>
      <Nav>
        <a href="/">COMPLAINTRONIX</a>
      </Nav>
    </Container>
  );
}
const Container = styled.div`
  padding: 0;
  margin-left: 40px;
  overflow: hidden;
  overflow-y: hidden;
`;
const Nav = styled.div`
  max-width: 1128px;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    font-size: 50px;
    color: #1ed760;
    text-decoration: none;
    border-bottom: 2px solid #d3d3d3;
    @media (max-width: 760px) {
      font-size: 35px;
    }
  }
`;
