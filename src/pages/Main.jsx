import React from "react";
import Input from '../components/Input.jsx';
import Calender from "../components/Calender.jsx";
import ListBox from "../components/ListBox.jsx";
import styled from "styled-components";
import { Stbody, Stbox, StTitle } from '../components/common';
import { useLocation, useNavigate } from "react-router-dom";


const Main = ({selectedMonth, setSelectedMonth, expenses, setExpenses}) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(selectedMonth);

  return (
    <Stbody>
      <StTitle>🍔 Bank Burger</StTitle>
      <Input expenses={expenses} setExpenses={setExpenses} />
      <Calender selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <ListBox expenses={expenses.filter((expense) => {
        if(expense.date === `2024-${selectedMonth}-${expense.date.substr(8, 9)}`) {
          return expense
        }
      })} />
    </Stbody>
  );
};

export default Main;
