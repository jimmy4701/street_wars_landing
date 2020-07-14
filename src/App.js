import React from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
