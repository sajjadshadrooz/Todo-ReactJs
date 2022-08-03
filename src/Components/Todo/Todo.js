import React, { useState, useContext } from 'react';
import TodosContext from '../../Contexts/Todos';
import EditTodos from './EditTodos';

function Todo(props) {
  const [edit, setEdit] = useState(false);
  const todosContext = useContext(TodosContext);
  const { item } = props;

  const editTaskName = (task) => {
    todosContext.edit(item.key, task);
    setEdit(false);
  };

  return (
    <>
      {!edit ? (
        <div className="col-6 mb-2">
          <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>{item.task}</div>
            <div>
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={(e) => setEdit(true)}
              >
                Edit
              </button>
              <button
                type="button"
                className={`btn btn-sm mx-sm-1 ${
                  item.done ? 'btn-warning' : 'btn-success'
                }`}
                onClick={() => todosContext.done(item.key)}
              >
                {item.done ? 'Undone' : 'Done'}
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm "
                onClick={() => todosContext.delete(item.key)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EditTodos task={item.task} edit={editTaskName} />
      )}
    </>
  );
}
export default Todo;
