import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/NavBar";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <h4>Hello Thennarasu!!!</h4>
      <h5>{window.location.origin}</h5>
      <Profile />
    </div>
  );
}

export default App;
