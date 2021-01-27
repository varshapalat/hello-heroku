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