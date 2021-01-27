import './App.css';
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import LogoutPage from "./components/LogoutPage"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  

  return (
    <Router>
    <div className="App">
      <LogoutButton />
      <h4>Hello Thennarasu!!!</h4>
      <h5>{window.location.origin}</h5>
      <Route path="/" exact component={Profile} />
      <Route path="/logout" component={LogoutPage} />
    </div>
    </Router>
  );
}

export default App;
