import './App.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['選択をする', 'ゲームをする']);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
    setCompletedTodos([...completedTodos, todo]);
  };

  const returnTodo = (todo) => {
    setCompletedTodos(completedTodos.filter((item) => item !== todo));
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  return (
    <div className='App'>
      <h1>TODO APP</h1>
      <InputTodo addTodo={addTodo} />
      <IncompleteTodos
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <hr />
      <CompleteTodos completedTodos={completedTodos} returnTodo={returnTodo} />
    </div>
  );
}

export default App;
