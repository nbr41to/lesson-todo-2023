import './IncompleteTodos.css';

export const IncompleteTodos = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <>
      <h2>未完了リスト</h2>
      <ul className='list'>
        {todos.map((todo, index) => (
          <li key={index} className='list-item'>
            <span>{todo}</span>
            <button onClick={() => completeTodo(todo)}>完了</button>
            <button onClick={() => deleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};
