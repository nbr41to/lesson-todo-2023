import './App.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    '選択をする',
    'ゲームをする',
    'りんごを食べる',
    'ばななを食べる',
    'だいふくを食べる',
  ]);
  const [completedTodos, setCompletedTodos] = useState([
    'ゲームを破壊する',
    '選択をする',
    'ゲームをする',
    'りんごを食べる',
    '1選択をする',
    '2ゲームをする',
    '3りんごを食べる',
    '4ばななを食べる',
    '5だいふくを食べる',
  ]);

  const addTodo = (todo) => {
    if (!todo) return;
    if (todos.length > 4)
      return alert('登録できるtodoは5個までです。消化してください。');

    setTodos([...todos, todo]);
  };

  const completeTodo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
    setCompletedTodos([...completedTodos, todo]);
  };

  const completeAllTodo = () => {
    setTodos([]);
    setCompletedTodos([...completedTodos, ...todos]);
  };

  const returnTodo = (todo) => {
    setCompletedTodos(completedTodos.filter((item) => item !== todo));
    setTodos([...todos, todo]);
  };

  const returnFiveTodos = () => {
    const newCompletedTodos = [...completedTodos];

    console.log('newCompletedTodos', newCompletedTodos);
    const latestFive = newCompletedTodos.splice(-5, 5);
    console.log('latestFive', latestFive);
    console.log('newCompletedTodos', newCompletedTodos);

    setCompletedTodos(newCompletedTodos);
    setTodos([...todos, ...latestFive]);

    // setCompletedTodos(
    //   completedTodos.filter((_, index) => index < completedTodos.length - 5),
    // );
    // setTodos([
    //   ...todos,
    //   ...completedTodos.filter((_, index) => index > completedTodos.length - 6),
    // ]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  const deleteAllTodo = (todo) => {
    setTodos([]);
  };

  return (
    <div className='root'>
      <h1>TODO APP</h1>
      <InputTodo addTodo={addTodo} />
      <IncompleteTodos
        todos={todos}
        completeTodo={completeTodo}
        completeAllTodo={completeAllTodo}
        deleteTodo={deleteTodo}
        deleteAllTodo={deleteAllTodo}
      />
      <CompleteTodos
        completedTodos={completedTodos}
        returnTodo={returnTodo}
        returnFiveTodos={returnFiveTodos}
      />
    </div>
  );
}

export default App;
