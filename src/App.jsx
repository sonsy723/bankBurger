import React, { useState } from "react";
import Input from './components/Input.jsx';
import Calender from "./components/Calender.jsx";
import ListBox from "./components/ListBox.jsx";
import Detail from "./pages/Detail.jsx";
import styled from "styled-components";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main.jsx";

// HTML
export const App = () => {

  const [selectedMonth, setSelectedMonth] = useState('');
  const [expenses, setExpenses] = useState([
    {
        "id": "9b1bd55a-aebe-4fdb-860b-a1c91d829822",
        "date": "2024-05-28",
        "item": "식비",
        "amount": "50000",
        "description": "사탕"
    },
    {
      "id": "9b1bd55a-aebe-4fdb-860b-a1c91d829823",
      "date": "2024-05-28",
      "item": "교통비",
      "amount": "250000",
      "description": "버스"
    },
    {
      "id": "9b1bd55a-aebe-4fdb-860b-a1c91d829824",
      "date": "2024-05-29",
      "item": "경조사",
      "amount": "70000",
      "description": "결혼"
    },
]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}
            expenses={expenses} setExpenses={setExpenses}/>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail />}
        />
    </Routes>
</BrowserRouter>
  );
};

export default App;
