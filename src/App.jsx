import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  // Change entre 'chef' et 'admin' pour tester les deux interfaces
  const userRole = 'chef'; // ou 'admin'

  return (
    <div className="app-container">
      <Sidebar />
      <Dashboard userRole={userRole} />
    </div>
  );
}

export default App;
