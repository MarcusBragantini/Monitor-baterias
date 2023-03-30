import "./App.css";
import { Switch, Route } from "react-router-dom";
import ListRecord from "./components";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={ListRecord} />
        </Switch>
    </div>
  );
}

export default App;
