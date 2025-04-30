import React, { useState } from 'react';
import axios from 'axios';

function ReportForm() {
  const [formData, setFormData] = useState({ type: '', location: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/report', formData);
    alert('Report submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit an Alert</h3>
      <input placeholder="Type (e.g. pothole)" onChange={e => setFormData({ ...formData, type: e.target.value })} />
      <input placeholder="Location" onChange={e => setFormData({ ...formData, location: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ReportForm;