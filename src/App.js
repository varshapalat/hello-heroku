import './App.css';
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function App() {
  const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect({ connection: 'google-oauth2' });
      }
    })();
  }, [isLoading])

  if (!isAuthenticated)
    return <div>Authenticating</div>

  return (
    <div className="App">
      <LogoutButton />
      <h4>Hello Thennarasu!!!</h4>
      <h5>{window.location.origin}</h5>
      <Profile />
    </div>
  );
}

export default App;
