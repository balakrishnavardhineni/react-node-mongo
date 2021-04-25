import "./index.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Users from "./Components/Users";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Users} />
      </Switch>
    </HashRouter>
  );
}
