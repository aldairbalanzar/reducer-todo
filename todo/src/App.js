import React, { useState, useReducer } from 'react';
import { todoListReducer, initialState } from './todoListReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleChanges = e => {
    setNewTodo(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = e => {
    addTodo(e, newTodo);
  }

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id})
  }

  const addTodo = (e, todo) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo});
  }

  console.log(state.todoList);

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
        <form onSubmit={handleSubmit}>
          <input
           onChange={handleChanges}
           value={newTodo}
           type="text"
          />
          <button> Add Todo </button>
        </form>
        <section>
          {state.todoList.map(item => {
            return(
              <p key={item.id} onClick={toggleTodo}>{item.name}</p>
            )
          })}
        </section>
  </div>
  );
}

export default App;
