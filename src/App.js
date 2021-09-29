import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectHostel from "./components/SelectHostel";
import ComplaintForm from "./components/ComplaintForm";
import ShowComplains from "./components/ShowComplains";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register-complain">
            <SelectHostel />
          </Route>
          <Route exact path="/register-complain-form">
            <ComplaintForm />
          </Route>
          <Route exact path="/show-complains">
            <ShowComplains />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
