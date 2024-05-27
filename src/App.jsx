import React from "react";
import Input from './components/Input.jsx';
import Calender from "./components/Calender";
import ListBox from "./components/ListBox";
import styled from "styled-components";

export const Stbox = styled.div`
  width: 80%;
  height: auto;
  padding: 20px;
  margin: auto;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
`;

export const App = () => {
  return (
    <div>
      <h1 className="title">🍔 Bank Burger</h1>
      {/* <Input />
      <Calender />
      <ListBox /> */}
    </div>
  );
};

export default App;
