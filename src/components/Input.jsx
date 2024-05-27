import React from 'react';
import {Stbox} from '../components/common';
import styled from "styled-components";

const FormDiv = styled.div`
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

const Input = () => {
  return (
    <Stbox>
      <FormDiv>
        <InputDiv>
          <InputP>날짜</InputP>
          <input type='date' />
        </InputDiv>

        <InputDiv>
          <InputP>항목</InputP>
          <input type="text" placeholder='지출 항목' />
        </InputDiv>

        <InputDiv>
          <InputP>금액</InputP>
          <input type='number' placeholder='지출 금액' />
        </InputDiv>

        <InputDiv>
          <InputP>내용</InputP>
          <input type="text" placeholder='지출 내용' />
        </InputDiv>

        <button type='submit'>저장</button>
      </FormDiv>
    </Stbox>
  )
}

export default Input;