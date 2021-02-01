import './App.css';
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  

  return (
    <Router>
    <div className="App">
      <LogoutButton />
      <Route path="/" exact component={Profile} />
    </div>
    </Router>
  );
}

export default App;
