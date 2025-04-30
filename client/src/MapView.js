import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MapView() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('/api/reports').then(res => setReports(res.data));
  }, []);

  return (
    <div>
      <h3>Reported Issues</h3>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>{report.type} at {report.location}</li>
        ))}
      </ul>
    </div>
  );
}
export default MapView;