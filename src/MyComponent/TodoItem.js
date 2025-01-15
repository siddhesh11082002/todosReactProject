import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4 className="my-2">{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(todo)} // Calls onDelete with the specific todo
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
