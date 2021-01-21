import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import LogoutButton from "./components/Logout";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LogoutButton />
      <h4>Hello heroku!!!</h4>
      <h1>{window.location.origin}</h1>
    </div>
  );
}

export default App;
