import './App.css';

import React from 'react';

import ApartmentForm from './features/ApartmentForm/ApartmentForm';
import ApartmentsList from './features/ApartmentsList/ApartmentsList';

function App() {
  return (
    <main>
      <ApartmentForm />
      <ApartmentsList />
    </main>
  );
}

export default App;
