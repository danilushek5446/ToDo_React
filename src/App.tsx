import React from 'react';
import { ThemeProvider } from 'styled-components';
import ToDoForm from './components/todoForm/ToDoForm';
import { myTheme } from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={myTheme} >
      <div className='app'>
      <ToDoForm />
    </div>
    </ThemeProvider>
  );
}

export default App;
