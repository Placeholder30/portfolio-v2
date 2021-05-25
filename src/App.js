import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import HeroSection from "./components/Home/HeroSection";
import Interest from "./components/Interest/Interest";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HeroSection} />
          <Route path="/projects" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/interest" component={Interest} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
