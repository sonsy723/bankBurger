import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


// 스타일
const StList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const StListP = styled.p`
  margin-right: 30px;
  display: flex;
`;

const StListAmount = styled.p`
  text-align: end;
  font-weight: 800;
  color: #ff7300;
  font-size: 1.2rem;
`;


function Lists({expenses}) {
  const navigate = useNavigate();
  console.log(expenses)
  return (
    <div>
      <ul>
        {expenses.map((expense) => {
          return (
            <StList key={expense.id} onClick={() => {navigate(`/detail/${expense.id}`);}}>
              <div>
                <StListP>{expense.date}</StListP>
                <StListP>{expense.item} - {expense.description}</StListP>
              </div>
              <div><StListAmount>{expense.amount}</StListAmount></div>
            </StList>
          )
        })}
      </ul>
    </div>
  )
}

export default Lists;