import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VoteProvider } from './VoteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <VoteProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </VoteProvider>
);

