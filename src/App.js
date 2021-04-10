import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroComp from "./Components/HeroComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Navbar />
            <HeroComp /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
