import logo from './logo.svg';
import Landing from "./Landing/Interviews"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
