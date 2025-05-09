import React, { useEffect, useState } from 'react';
import './Dashboardorga.css';

import { Link } from 'react-router-dom';

const Dashboardorga = ({ userRole }) => {
  const [stats, setStats] = useState({
    enseignants: '',
    modules: '',
    specialites: ''
  });

  const [alertMessage, setAlertMessage] = useState(
    "CERTAINES HEURES D'ENSEIGNEMENT EXCÉDENTAIRES ONT ÉTÉ DÉTECTÉES"
  );

  useEffect(() => {
    const storedStats = JSON.parse(localStorage.getItem('stats')) || {
      enseignants: '130',
      modules: '10 à 12',
      specialites: '3'
    };
    setStats(storedStats);

    const storedAlert = localStorage.getItem('alertMessage');
    if (storedAlert) {
      setAlertMessage(storedAlert);
    }
  }, []);

  const showStats = () => {
    alert(
      `📊 Statistiques actuelles :\n\n` +
      `👨‍🏫 Enseignants : ${stats.enseignants}\n` +
      `📘 Modules : ${stats.modules}\n` +
      `🏷️ Spécialités : ${stats.specialites}`
    );
  };

  return (
    <div className="dashboard-container">
      <h1>Tableau de bord</h1>

      {userRole === 'chef' ? (
        <>
          <Link to="/organigramme">
            <button className="organigram-btn">ORGANIGRAMME ➝</button>
          </Link>

          <div className="alert">
            <strong>PROBLÈME DÉTECTÉ</strong><br />
            {alertMessage}
          </div>

          <div className="actions">
            <button>MODIFIER L’ORGANIGRAMME</button>
            <button onClick={showStats}>VOIR LES STATISTIQUES GÉNÉRALES</button>
          </div>

          <div className="stats">
            <div><strong>{stats.enseignants}</strong><br />TOTAL D’ENSEIGNANTS</div>
            <div><strong>{stats.modules}</strong><br />Modules</div>
            <div><strong>{stats.specialites}</strong><br />Spécialités</div>
          </div>
        </>
      ) : (
        <>
          <h2>Vue d’ensemble de l’organigramme</h2>
          <button className="organigram-btn"> ORGANIGRAMME ➝</button>
          <button>FILTRER PAR DÉPARTEMENT ⌄</button>

          <div className="stats">
            <div><strong>{stats.enseignants}</strong><br />Enseignants</div>
            <div><strong>{stats.specialites}</strong><br />Spécialités</div>
            <div><strong>{stats.modules}</strong><br />Modules</div>
          </div>

          <div className="quick-access">
            <button>📚 VOIR ENSEIGNANTS</button>
            <button>📘 VOIR MODULES</button>
            <button>🕘 VOIR ORGANIGRAMME</button>
            <button>💬 AJOUTER UN COMMENTAIRE</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboardorga;
