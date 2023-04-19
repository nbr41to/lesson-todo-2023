import './CompleteTodos.css';

export const CompleteTodos = ({ completedTodos, returnTodo }) => {
  return (
    <>
      <h2>完了リスト</h2>
      <ul className='list'>
        {completedTodos.map((todo, index) => (
          <li key={index} className='list-item'>
            <span>{todo}</span>
            <button onClick={() => returnTodo(todo)}>戻す</button>
          </li>
        ))}
      </ul>
    </>
  );
};
