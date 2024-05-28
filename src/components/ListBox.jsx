import React from 'react'
import Lists from './Lists';
import {Stbox} from '../components/common';
import styled from "styled-components";

function ListBox({expenses}) {
  return (
    <Stbox>
        <Lists expenses={expenses}/>
    </Stbox>
  )
}

export default ListBox;
