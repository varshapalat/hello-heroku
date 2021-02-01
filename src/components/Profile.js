import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect({ connection: "TrialAppDevConnection" });
      }
    })();
  }, [isLoading, user, isAuthenticated, loginWithRedirect])

  if (!isAuthenticated)
    return <div>Authenticating</div>


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>User Profile</h2>
        <h2>{user.name}</h2>
        <h3>{user.nickname}</h3>
        <h3>{user.email}</h3>
        <h3>{user.sub}</h3>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;