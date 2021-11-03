import './App.scss';
import Nav from './components/Nav';
import CharactersPage from './components/pages/CharactersPage';
import SystemPage from './components/pages/SystemPage';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <NavLink to="/character" activeClassName="active">
            Characters
          </NavLink>
          <NavLink to="/system" activeClassName="active">
            System
          </NavLink>
        </Nav>

        <Switch>
          <Route path="/character">
            <CharactersPage />
          </Route>
          <Route path="/system">
            <SystemPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
