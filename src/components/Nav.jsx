// @flow

import * as React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

import "./Nav.scss";

type Props = {
  children?:React.Node,
  level:string,
}

export default function Nav({ children, level }:Props):React.MixedElement {
    return <nav level={level}>
    {
      children
    }
    </nav>
}