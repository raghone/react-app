import React, { useState } from 'react';
import './App.css';
import ProfileList from './components/ProfileList';  
import MapView from './components/MapView';          




const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      name: 'Raghavan A',
      photo: 'https://via.placeholder.com/150',
      description: 'Software Developer',
      address: '123 Main St, City, Country',
      lat: 51.5074,
      lon: -0.1278,
    },
    {
      name: 'Shobharaj C',
      photo: 'https://via.placeholder.com/150',
      description: 'Product Manager',
      address: '456 Oak Rd, City, Country',
      lat: 40.7128,
      lon: -74.0060,
    },
  ];

  return (
    <div className="app">
      <h1>Profile Mapping App</h1>
      <ProfileList profiles={profiles} setSelectedProfile={setSelectedProfile} />
      {selectedProfile && (
        <MapView profile={selectedProfile} />
      )}
    </div>
  );
};

export default App;
