import './App.css';
import Headers from './MyComponent/Headers.js';
import Footer from './MyComponent/Footer.js';
import Todos from './MyComponent/Todos.js';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("Deleting todo: ", todo);
    setTodos(todos.filter((e) => e.sno !== todo.sno)); // Uses sno to identify unique todos
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "buy onion",
      desc: "buy 2kg onions",
    },
    {
      sno: 2,
      title: "buy tomato",
      desc: "buy 1kg tomato",
    },
    {
      sno: 3,
      title: "go to gym",
      desc: "go to the gym at 6 am",
    },
  ]);

  return (
    <>
      <Headers title="My Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
