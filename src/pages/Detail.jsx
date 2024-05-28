import React from 'react'
import styled from "styled-components";
import {Stbody, Stbox} from '../components/common';
import { useNavigate } from "react-router-dom";


const Detail = () => {
  const navigate = useNavigate();
  return (
    <Stbody>
      <Stbox>
        <button onClick={() => {navigate('/');}}>Home</button>
      </Stbox>
    </Stbody>
  )
}

export default Detail;