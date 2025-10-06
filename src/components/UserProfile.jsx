import React, { useContext } from 'react';
import { AuthContext } from './../contexts/AuthContext.jsx';
import { useFetchData } from './../hooks/useFetchData.jsx';

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  const { data: profile, loading, error } = useFetchData(`/api/users/${user.id}/profile`);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!profile) return <div>No profile found.</div>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
    </div>
  );
}