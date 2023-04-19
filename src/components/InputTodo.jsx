import { useState } from 'react';
import './InputTodo.css';

export const InputTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleOnClick = () => {
    addTodo(inputText);
    setInputText('');
  };

  return (
    <div className='input-form'>
      <input
        type='text'
        placeholder='TODOを入力'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleOnClick}>追加</button>
    </div>
  );
};
