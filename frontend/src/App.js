import logo from './logo.svg';
import Landing from "./Landing/Interviews"
import Dashboard from "./Dashboard/Dashboard"
import Sign from "./Landing/Sign"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/sign" exact component={Sign} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

