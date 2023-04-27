import './CompleteTodos.css';

export const CompleteTodos = ({
  completedTodos,
  returnTodo,
  returnFiveTodos,
}) => {
  return (
    <>
      <h2>完了リスト</h2>
      <button disabled={!completedTodos.length} onClick={returnFiveTodos}>
        最新の5件を戻す
      </button>
      <ul className='list'>
        {completedTodos.map((todo, index) => (
          <li key={`${index}-${todo}`} className='list-item'>
            <span>{todo}</span>
            <button onClick={() => returnTodo(todo)}>戻す</button>
          </li>
        ))}
      </ul>
    </>
  );
};
