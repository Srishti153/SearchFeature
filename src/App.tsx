import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChipInput from './ChipInput';
import Chip from './Chip';

function App() {

  const items = ['banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'peach', 'pineapple', 'plum', 'raspberry', 'strawberry', 'tomato', 'ugli fruit', 'victoria pineapple', 'watermelon'];
  const initialChips = ['apple'];


  return (
    <div className="App">
      <h1>Search Feature in React Typescript</h1>
      <ChipInput items={items} initialChips={initialChips} />
    </div>
  );
}

export default App;