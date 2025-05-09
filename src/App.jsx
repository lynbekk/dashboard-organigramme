import React from 'react';
import Sidebarorga from './components/Sidebarorga';
import Dashboardorga from './components/Dashboardorga';
import './App.css';

function App() {
  const userRole = 'chef'; // ou 'admin'

  return (
    <div className="app-container">
      <Sidebarorga />
      <Dashboardorga userRole={userRole} />
    </div>
  );
}

export default App;
