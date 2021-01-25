import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div>Profile section</div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <h3>{user.nickname}</h3>
        <h3>{user.name}</h3>
        <h3>{user.picture}</h3>
        <h3>{user.locale}</h3>
        <h3>{user.updated_at}</h3>
        <h3>{user.email}</h3>
        <h3>{user.email_verified}</h3>
        <h3>{user.sub}</h3>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;