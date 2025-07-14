import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './index2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App />
    <Chai/>
    <h2>Chai aur react</h2>
    <p>test para</p>
    </>

  </React.StrictMode>
);

