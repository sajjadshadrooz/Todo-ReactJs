import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Importing Components.
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Jumbotron from './Layout/Jumbotron';
import TodoList from './Todo/TodoList';

// Importing Contexts
import TodosContext from '../Contexts/Todos';

// Importing Reducers
import AppReducer from '../Reducers/AppReducer';

function App() {
  const [state, dispatch] = useReducer(AppReducer, {
    todos: [],
  });

  const valueContext = {
    todos: state.todos,
    dispatch,
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TodosContext.Provider value={valueContext}>
          <Jumbotron />
          <div className="todosList">
            <div className="container">
              <div className="d-flex flex-column align-items-center ">
                <TodoList />
              </div>
            </div>
          </div>
        </TodosContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
