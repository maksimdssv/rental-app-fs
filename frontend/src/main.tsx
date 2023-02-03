import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ApartmentsProvider } from './context/ApartmentsContext';

ReactDOM.render(
  <React.StrictMode>
    <ApartmentsProvider>
      <App />
    </ApartmentsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
