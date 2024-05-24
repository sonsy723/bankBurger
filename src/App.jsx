import React from 'react'
import Input from './components/Input';
import Calender from './components/Calender';
import ListBox from './components/ListBox';

export const App = () => {
  return (
    <div>
      <h1>🍔 Bank Burger</h1>
      <Input />
      <Calender />
      <ListBox />
    </div>
  )
}

export default App;
