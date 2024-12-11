import iconСhange from './icons/change.svg';
import iconDel from './icons/del.svg';

const TodoItem = ({ todo, handleToggleCompleted, handleEditStart, handleEditChange, handleDeleteTodo }) => {
  return (
    <li key={todo.id}>
      <div className="note">
        <label className='Labelcheck'>
        <input
          className='input3'
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggleCompleted(todo.id)}
        />
        </label>
        {todo.editing ? (
          <form onSubmit={(event) => event.preventDefault()}>
            <input 
              className="input2"
              type="text"
              value={todo.text}
              onChange={(event) => handleEditChange(todo.id, event)}
              autoFocus
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
            />
          </form>
        ) : (
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="buttonСhange">
        <button onClick={() => handleEditStart(todo.id)} className="battonList">
          <img src={iconСhange} alt="изменить" className="change-icon" />
        </button>
        <button onClick={() => handleDeleteTodo(todo.id)} className="battonList">
          <img src={iconDel} alt="удалить" className="del-icon" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;