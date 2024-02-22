import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(todos.length);
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };
  const sortedTodos = todos.slice().sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  return (
    <div className='container'>
      <Header count={count} addTodo={addTodo} />
      <div className='todos'>
        {
          sortedTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
