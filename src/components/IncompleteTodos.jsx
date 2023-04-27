import './IncompleteTodos.css';

export const IncompleteTodos = ({
  todos,
  completeTodo,
  completeAllTodo,
  deleteTodo,
  deleteAllTodo,
}) => {
  return (
    <>
      <h2>未完了リスト</h2>
      <button disabled={!todos.length} onClick={completeAllTodo}>
        全て完了
      </button>
      <button disabled={!todos.length} onClick={deleteAllTodo}>
        全て削除
      </button>
      <ul className='list'>
        {todos.map((todo, index) => (
          <li key={`${index}-${todo}`} className='list-item'>
            <span>{todo}</span>
            <button onClick={() => completeTodo(todo)}>完了</button>
            <button onClick={() => deleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};
