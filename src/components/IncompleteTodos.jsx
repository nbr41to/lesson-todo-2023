import './IncompleteTodos.css';

export const IncompleteTodos = ({
  todos,
  completeTodo,
  completeAllTodo,
  deleteTodo,
  deleteAllTodo,
}) => {
  return (
    <div className='incomplete-todos-root'>
      <h2>未完了リスト</h2>
      <div className='incomplete-todos-interface'>
        <button disabled={!todos.length} onClick={completeAllTodo}>
          全て完了
        </button>
        <button disabled={!todos.length} onClick={deleteAllTodo}>
          全て削除
        </button>
      </div>

      <ul className='incomplete-todos-list'>
        {todos.map((todo, index) => (
          <li key={`${index}-${todo}`} className='incomplete-todos-list-item'>
            <span>{todo}</span>
            <button onClick={() => completeTodo(todo)}>完了</button>
            <button onClick={() => deleteTodo(todo)}>削除</button>
          </li>
        ))}
        {todos.length === 0 && (
          <p className='incomplete-todos-list-item'>TODOを追加してください</p>
        )}
      </ul>
    </div>
  );
};
