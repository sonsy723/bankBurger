import React, { useState } from 'react';
import {Stbox} from '../components/common';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';


// 스타일
const FormDiv = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled.div`
  display: flex;
  padding-right: 35px;
`;

const InputP = styled.p`
  padding-right: 8px;
  font-weight: 600;
`;


// 함수
const Input = ({expenses, setExpenses}) => {

  const [inputDate, setInputDate] = useState('');
  const [inputItem, setInputItem] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDescription, setInputDescription]= useState('');

  const handleDateChange = (e) => {setInputDate(e.target.value)};
  const handleItemChange = (e) => {setInputItem(e.target.value)};
  const handleAmountChange = (e) => {setInputAmount(e.target.value)};
  const handleDescriptionChange = (e) => {setInputDescription(e.target.value)};

  const handleSubmit = (e) => {
    e.preventDefault()

    const newExpense = {
      id: uuidv4(),
      date: inputDate,
      item: inputItem,
      amount: inputAmount,
      description: inputDescription,
    }
    setExpenses((prev) => [...prev, newExpense])
  };

  return (
    <Stbox>
      <FormDiv onSubmit={handleSubmit}>
        <InputDiv>
          <InputP>날짜</InputP>
          <input type='date' value={inputDate} onChange={handleDateChange} />
        </InputDiv>

        <InputDiv>
          <InputP>항목</InputP>
          <input type="text" value={inputItem} placeholder='지출 항목' onChange={handleItemChange} />
        </InputDiv>

        <InputDiv>
          <InputP>금액</InputP>
          <input type='number' value={inputAmount} placeholder='지출 금액' onChange={handleAmountChange} />
        </InputDiv>

        <InputDiv>
          <InputP>내용</InputP>
          <input type="text" value={inputDescription} placeholder='지출 내용' onChange={handleDescriptionChange} />
        </InputDiv>

        <button type='submit'>저장</button>
      </FormDiv>
    </Stbox>
  )
}

export default Input;