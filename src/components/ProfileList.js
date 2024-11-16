import React from 'react';

const ProfileList = ({ profiles, setSelectedProfile }) => {
  return (
    <div className="profile-list">
      <h2>Profiles</h2>
      {profiles.map((profile, index) => (
        <div key={index} className="profile-card">
          <img src={profile.photo} alt="Profile" />
          <div className="profile-info">
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => setSelectedProfile(profile)}>
              Show on Map
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;


