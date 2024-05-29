import React from 'react'
import styled from "styled-components";
import { Stbody, Stbox, StTitle } from '../components/common';
import { useNavigate } from "react-router-dom";
import Input from '../components/Input';


const Detail = () => {
  const navigate = useNavigate();
  return (
    <Stbody>
      <StTitle onClick={() => {navigate('/');}}>🍔 Bank Burger</StTitle>
      <input type="text" />
      <button>수정</button>
      <button>삭제</button>
    </Stbody>
  )
}

export default Detail;