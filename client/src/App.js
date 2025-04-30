import React from 'react';
import ReportForm from './ReportForm';
import MapView from './MapView';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <div>
      <h1>CrowdWatch - Neighborhood Alert System</h1>
      <ReportForm />
      <MapView />
      <AdminDashboard />
    </div>
  );
}
export default App;