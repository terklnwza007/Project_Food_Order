import React from 'react';
import './App.css';
import Meat from './Meat';
import List_order from './List_order';

function App() {
  return (
    <div>
      <div className="App-background1"></div>
      <div className='grid'>
      <Meat />
      <List_order/>
      </div>
    </div>
  );
}

export default App;
