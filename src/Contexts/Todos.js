import React from 'react';

const TodosContext = React.createContext({
  todos: [],
  add: () => {},
  delete: () => {},
  done: () => {},
  edit: () => {},
});

export default TodosContext;
