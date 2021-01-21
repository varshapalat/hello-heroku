import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h4>Hello heroku!!!</h4>
      <h1>{window.location.origin}</h1>
    </div>
  );
}

export default App;
