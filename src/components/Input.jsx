import React from 'react'

const Input = () => {
  return (
    <div>
      <div className='date'>
        <p>날짜</p>
        <input type='date' />
      </div>

      <div className='items'>
        <p>항목</p>
        <input type="text" placeholder='지출 항목' />
      </div>

      <div className='amount'>
        <p>금액</p>
        <input type='number' placeholder='지출 금액' />
      </div>

      <div className='contents'>
        <p>내용</p>
        <input type="text" placeholder='지출 내용' />
      </div>

      <button type='submit' className='saveBtn'>저장</button>
    </div>
  )
}

export default Input;