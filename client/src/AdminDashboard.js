import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('/api/reports').then(res => setReports(res.data));
  }, []);

  return (
    <div>
      <h3>Admin Dashboard</h3>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>{report.type} | {report.location} | {report.description}</li>
        ))}
      </ul>
    </div>
  );
}
export default AdminDashboard;