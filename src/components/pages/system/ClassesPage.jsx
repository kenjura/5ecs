// @flow

import * as React from 'react';
import CharacterClass from '../../../model/CharacterClass';
import Nav from '../../Nav';
import ClassView from './ClassView';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';

export default function ClassesPage(): React.MixedElement {
  const { className } = useParams();
  const { path, url } = useRouteMatch();
  const classes: Array<CharacterClass> = CharacterClass.findAll();
  const currentClass: ?CharacterClass =
    CharacterClass.findOneByName(className);

  return (
    <div className="page">
      <Nav level="3">
        {classes.map((clas) => (
          <NavLink
            key={clas.name}
            to={`${path.replace(':className?',clas.name)}`}
            activeClassName="active"
          >
            {clas.name}
          </NavLink>
        ))}
      </Nav>

      <ClassView characterClass={currentClass} />
    </div>
  );
}
