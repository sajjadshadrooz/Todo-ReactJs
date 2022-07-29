import React, { useState } from 'react';

function FormAddToDo(props) {
  const [task, setTask] = useState('');

  const inputHandler = (e) => setTask(e.target.value);

  const formHandler = (e) => {
    e.preventDefault();
    props.add(task);
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
