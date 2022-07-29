import React, { useState } from 'react';

function EditTodos(props) {
  const [task, setTask] = useState(props.task);

  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <input
          className="form-control mx-sm-1"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div>
          <button type="button" className="btn btn-info" onClick={() => props.edit(task)}>
            Set
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditTodos;
