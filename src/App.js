import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DynamicComponent from "./Components/DynamicComponent";
import Home from "./Components/Home";
import StaticComponent from "./Components/StaticComponent";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/static" exact component={StaticComponent} />
        <Route path="/dynamic" exact component={DynamicComponent} />
      </Switch>
    </Router>
  );
};

export default App;
