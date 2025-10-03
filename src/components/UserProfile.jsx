import React, { useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useFetchData } from '../hooks/useFetchData';

export default function UserProfile() {
  const { user } = useContext(useAuth);
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