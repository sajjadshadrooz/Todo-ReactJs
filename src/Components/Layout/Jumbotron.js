import React from 'react';

import FormAddToDo from './../Todo/FormAddToDo';

function Jumbotron() {
  return (
    <section className="jumbotron bg-light mb-5">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="jumbotron-heading mt-3">Welcome!</h1>
        <p className="lead">To get started, add some items to your list!</p>
        <FormAddToDo />
      </div>
    </section>
  );
}
export default Jumbotron;
