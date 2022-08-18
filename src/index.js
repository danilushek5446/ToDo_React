import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ToDoForm from './components/ToDoForm';
import store from './app/store';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ToDoForm />
  </Provider>
);
