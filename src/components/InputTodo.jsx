import { useState } from 'react';
import './InputTodo.css';

export const InputTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleOnClick = () => {
    addTodo(inputText);
    setInputText('');
  };

  return (
    <div className='input-todo-root'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='TODOを入力'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          disabled={!inputText || inputText.length > 5}
          onClick={handleOnClick}
        >
          追加
        </button>
      </div>
      {inputText.length > 5 && <p>5文字以内で入力してください。</p>}
    </div>
  );
};
