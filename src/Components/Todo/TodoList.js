import React, { useState } from 'react';

import Todo from './Todo';

function TodoList(props) {
  const [StatusTodos, setStatusTodos] = useState(false);

  const { todos } = props;

  const filterTodos = todos.filter((item) => item.done === StatusTodos);

  return (
    <>
      <nav className="col-6 mb-3">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-item nav-link font-weight-bold ${
              !StatusTodos ? 'active' : ''
            }`}
            id="nav-home-tab"
            onClick={() => setStatusTodos(false)}
          >
            Undone{' '}
            <span className="badge bg-secondary">
              {todos.filter((item) => item.done === false).length}
            </span>
          </button>
          <button
            className={`nav-item nav-link font-weight-bold ${
              StatusTodos ? 'active' : ''
            }`}
            id="nav-profile-tab"
            onClick={() => setStatusTodos(true)}
          >
            Done{' '}
            <span className="badge bg-success">
              {todos.filter((item) => item.done === true).length}
            </span>
          </button>
        </div>
      </nav>
      {filterTodos.length === 0 ? (
        StatusTodos ? (
          <p>There isn't any done todos!</p>
        ) : (
          <p>There isn't any undone todos!</p>
        )
      ) : (
        filterTodos.map((item) => (
          <Todo
            key={item.key}
            item={item}
            delete={props.delete}
            changeStatus={props.changeStatus}
            editTodo={props.editTodo}
          />
        ))
      )}
    </>
  );
}
export default TodoList;
