import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Importing Components.
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Jumbotron from './Layout/Jumbotron';
import TodoList from './Todo/TodoList';

class App extends Component {
  state = {
    todos: [],
  };

  addItemToDos(task) {
    if (task) {
      this.setState((preState) => {
        return {
          todos: [...preState.todos, { key: Date.now(), done: false, task }],
        };
      });
    }
  }

  deleteToDo(key) {
    this.setState((preState) => {
      return {
        todos: preState.todos.filter((item) => item.key !== key),
      };
    });
  }

  changeStatusTodo(key) {
    const filterd = this.state.todos.filter((item) => item.key !== key);
    const item = this.state.todos.find((item) => item.key === key);
    item.done = !item.done;

    this.setState((preState) => {
      return {
        todos: [...filterd, item],
      };
    });
  }

  editTodoName(key, task) {
    const filterd = this.state.todos.filter((item) => item.key !== key);
    const item = this.state.todos.find((item) => item.key === key);
    item.task = task;

    this.setState((preState) => {
      return {
        todos: [...filterd, item],
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Jumbotron add={this.addItemToDos.bind(this)} />
          <div className="todosList">
            <div className="container">
              <div className="d-flex flex-column align-items-center ">
                <TodoList
                  todos={this.state.todos}
                  delete={this.deleteToDo.bind(this)}
                  changeStatus={this.changeStatusTodo.bind(this)}
                  editTodo={this.editTodoName.bind(this)}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
