import "./App.css";
import { Switch, Route } from "react-router-dom";
import ListRecord from "./components";
import About from "./components/About";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={ListRecord} />
        </Switch>
        <About />
    </div>
  );
}

export default App;
