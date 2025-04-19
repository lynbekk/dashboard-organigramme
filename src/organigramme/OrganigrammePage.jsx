import React, { useState } from 'react';
import Sidebar from './Sidebar';
import OrganigrammeTable from './OrganigrammeTable';
import dataS1 from '../data/organigrammeS1.json';
import dataS2 from '../data/organigrammeS2.json';

import './OrganigrammePage.css';

const OrganigrammePage = () => {
  const [active, setActive] = useState('S1');

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flex: 1 }}>
        <h1>Organigramme</h1>
        <div className="organigramme-buttons">
          <button
            className={active === 'S1' ? 'active' : ''}
            onClick={() => setActive('S1')}
          >
            Organigramme de S1
          </button>
          <button
            className={active === 'S2' ? 'active' : ''}
            onClick={() => setActive('S2')}
          >
            Organigramme de S2
          </button>
        </div>
        <OrganigrammeTable data={active === 'S1' ? dataS1 : dataS2} />
      </div>
    </div>
  );
};

export default OrganigrammePage;