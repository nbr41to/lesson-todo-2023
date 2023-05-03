import './CompleteTodos.css';

export const CompleteTodos = ({
  completedTodos,
  returnTodo,
  returnFiveTodos,
}) => {
  return (
    <div className='complete-todos-root'>
      <h2>完了リスト</h2>
      <div className='complete-todos-interface'>
        <button disabled={!completedTodos.length} onClick={returnFiveTodos}>
          最新の5件を戻す
        </button>
      </div>

      <ul className='complete-todos-list'>
        {completedTodos.map((todo, index) => (
          <li key={`${index}-${todo}`} className='complete-todos-list-item'>
            <span>{todo}</span>
            <button onClick={() => returnTodo(todo)}>戻す</button>
          </li>
        ))}
        {completedTodos.length === 0 && (
          <p className='complete-todos-list-item'>
            完了しているTODOはありません
          </p>
        )}
      </ul>
    </div>
  );
};
