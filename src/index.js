import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import List from './list';

const App = () => {
  return (
    <div>
      <h1>Recipt</h1>
      <Form />
      <List />
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);