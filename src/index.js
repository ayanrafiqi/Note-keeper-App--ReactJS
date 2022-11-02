import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//To render a React element, first pass the DOM element to ReactDOM.createRoot(),
// then pass the React element to root.render()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


