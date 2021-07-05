
import MainRoute from './routes/routes'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
    <Switch>
    <Route path="/" component={MainRoute} />
    </Switch>
  </Router>
  );
}

export default App;
