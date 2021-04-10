import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> <Navbar></Navbar> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
