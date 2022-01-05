import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalContextProvider from './context/theme/ThemeState';

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById('root')
);
