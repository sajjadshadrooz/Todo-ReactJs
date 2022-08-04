function AppReducer(state, action) {
  switch (action.type) {
    case 'add':
      return addTodo(state, action);
    //break
    case 'delete':
      return deleteTodo(state, action);
    //break
    case 'done':
      return toggleTodo(state, action);
    //break
    case 'edit':
      return editTodo(state, action);
    //break
    default:
      return state;
    //break
  }
}
export default AppReducer;

const addTodo = (state, action) => {
  const { task } = action.payload;
  if (task) {
    return {
      ...state,
      todos: [...state.todos, { key: Date.now(), done: false, task }],
    };
  }
  return state;
};

const deleteTodo = (state, action) => {
  const { key } = action.payload;

  return {
    ...state,
    todos: state.todos.filter((item) => item.key !== key),
  };
};

const toggleTodo = (state, action) => {
  const { key, status } = action.payload;

  const item = state.todos.find((item) => item.key === key);
  item.done = status;

  const newTodos = state.todos.filter((item) => item.key !== key);

  return {
    ...state,
    todos: [...newTodos, item],
  };
};

const editTodo = (state, action) => {
  const { key, task } = action.payload;

  const item = state.todos.find((item) => item.key === key);
  item.task = task;

  const newTodos = state.todos.filter((item) => item.key !== key);

  return {
    ...state,
    todos: [...newTodos, item],
  };
};
