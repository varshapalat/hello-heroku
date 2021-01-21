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
      <Profile />
    </div>
  );
}

export default App;
