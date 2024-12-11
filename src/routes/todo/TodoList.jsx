import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggleCompleted, handleEditStart, handleEditChange, handleEditSubmit, handleDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleCompleted={handleToggleCompleted}
          handleEditStart={handleEditStart}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;