// @flow

import * as React from 'react';
import { Link, useRoute } from "wouter";

import "./Nav.scss";

export default function Nav():React.MixedElement {
  const [isCharacters] = useRoute("/characters");
  const [isSystem] = useRoute("/system");

    return <nav id="nav-main"> 
        <Link href="/characters" className={isCharacters ? 'active' :''}>Characters</Link>
        <Link href="/system" className={isSystem ? 'active' : ''}>System</Link>
    </nav>
}