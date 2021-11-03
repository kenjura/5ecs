// @flow

import * as React from 'react';
import ClassesPage from './system/ClassesPage';
import Nav from '../Nav';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';

export default function SystemPage():React.MixedElement {
    const { path, url } = useRouteMatch();

    return <div>
            
        <Nav level="2">
          <NavLink to={`${url}/classes`} activeClassName="active">Classes</NavLink>
          <NavLink to={`${url}/origins`} activeClassName="active">Origins</NavLink>
          <NavLink to={`${url}/skills`} activeClassName="active">Skills</NavLink>
          <NavLink to={`${url}/feats`} activeClassName="active">Feats</NavLink>
          <NavLink to={`${url}/powers`} activeClassName="active">Powers</NavLink>
          <NavLink to={`${url}/items`} activeClassName="active">Items</NavLink>
        </Nav>

        <Switch>
            <Route path={`${path}/classes/:className?`}><ClassesPage /></Route>
            <Route path={`${path}/origins`}>origins</Route>
        </Switch>
    </div>
}