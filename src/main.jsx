import React from 'react';
import ReactDOM from 'react-dom/client';
import Okay from './App'; // or the component you're rendering


// Create a root element and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Okay />
  </React.StrictMode>
);
