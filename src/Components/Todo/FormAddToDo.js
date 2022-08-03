import React, { useState, useContext } from 'react';
import TodosContext from '../../Contexts/Todos';

function FormAddToDo() {
  const [task, setTask] = useState('');
  const todosContext = useContext(TodosContext);

  const inputHandler = (e) => setTask(e.target.value);

  const formHandler = (e) => {
    e.preventDefault();
    todosContext.add(task);
    setTask('');
  };

  return (
    <form className="form-inline mb-5" onSubmit={formHandler}>
      <div className="form-group d-flex">
        <input
          type="text"
          className="form-control mx-sm-1"
          placeholder="I want to do ..."
          value={task}
          onChange={inputHandler}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
export default FormAddToDo;
