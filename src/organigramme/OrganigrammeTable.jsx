import React from 'react';

const OrganigrammeTable = ({ data }) => {
  if (!data || data.length === 0) return <p>Aucune donnée disponible.</p>;

  const headers = Object.keys(data[0]);

  return (
    <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrganigrammeTable;