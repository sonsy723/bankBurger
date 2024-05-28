import React from 'react';
import Month from './Month';
import {Stbox} from '../components/common';
import styled from "styled-components";

export const Calender = ({selectedMonth, setSelectedMonth}) => {
  return (
    <Stbox>
        <Month selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>
    </Stbox>
  )
}

export default Calender;