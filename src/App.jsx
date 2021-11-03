import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import SystemPage from './components/pages/SystemPage';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

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
          <Route path="/character">characters</Route>
          <Route path="/system">
            <SystemPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
