import React from "react";
import Input from './components/Input.jsx';
import Calender from "./components/Calender.jsx";
import ListBox from "./components/ListBox.jsx";
import styled from "styled-components";

// 스타일
const Stbody = styled.div`
  background-color: #ffdca7;
`;

const StTitle = styled.h1`
  text-align: center;
  padding: 40px 0px;
  font-size: 40px;
  font-weight: 800;
`;

// 
export const App = () => {
  return (
    <Stbody>
      <StTitle>🍔 Bank Burger</StTitle>
      <Input />
      <Calender />
      <ListBox />
    </Stbody>
  );
};

export default App;
