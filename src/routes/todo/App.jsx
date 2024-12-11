import { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleToggleCompleted = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo , completed: !todo.completed };
      }
      return todo;
    }));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditStart = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: !todo.editing };
      }
      return todo;
    }));
  };

  const handleEditChange = (id, event) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: event.target.value };
      }
      return todo;
    }));
  };

  const handleEditSubmit = (id, event) => {
    event.preventDefault();
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: false };
      }
      return todo;
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false, editing: false }]);
      setNewTodo('');
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleSubmit={handleSubmit} />
      <TodoList 
        todos={todos} 
        handleToggleCompleted={handleToggleCompleted} 
        handleEditStart={handleEditStart} 
        handleEditChange={handleEditChange} 
        handleEditSubmit={handleEditSubmit} 
        handleDeleteTodo={handleDeleteTodo} 
      />
    </div>
  );
};

export default App;