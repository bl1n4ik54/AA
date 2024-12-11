const TodoInput = ({ newTodo, setNewTodo, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input1"
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Создать новую заметку..."
      />
      <button type="submit" className="create">Создать</button>
    </form>
  );
};

export default TodoInput;