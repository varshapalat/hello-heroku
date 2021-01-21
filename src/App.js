import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LogoutButton />
      <h4>Hello heroku!!!</h4>
      <h5>{window.location.origin}</h5>
      <Profile />
    </div>
  );
}

export default App;
