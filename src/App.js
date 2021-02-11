import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "./login/login";
import Home from "./home/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
