import React from 'react';
import ReactDOM from 'react-dom/client';
import './defaultFiles/index.css';
import App from './components/App';
import reportWebVitals from './defaultFiles/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <App />

);

reportWebVitals();
