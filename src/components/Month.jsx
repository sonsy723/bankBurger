import React, { useState } from 'react'
import {Stbox} from '../components/common';
import styled from "styled-components";

const Monthbtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ececec;
  border: 0;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
  `;

const MonthList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  width: 80%;
  height: auto;
  padding: 20px;
  margin: auto;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
`;

function Month({selectedMonth, setSelectedMonth}) {


  return (
    <MonthList>
        <Monthbtn onClick={() => {setSelectedMonth('01')}}>1월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('02')}}>2월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('03')}}>3월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('04')}}>4월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('05')}}>5월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('06')}}>6월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('07')}}>7월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('08')}}>8월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('09')}}>9월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('10')}}>10월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('11')}}>11월</Monthbtn>
        <Monthbtn onClick={() => {setSelectedMonth('12')}}>12월</Monthbtn>
    </MonthList>
  )
}

export default Month;