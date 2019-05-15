import React from 'react';
import { Link } from 'react-router-dom';

const linkRoutes = [
  {
    path: "/",
    exact: true,
    key: "1",
    main: () => (
      <section>
        <span className="mr3 ttu b bb my-red">home</span>
        <Link to='/blog' className="link ttu fw4 dim my-red">blog</Link>
      </section>
    )
  },
  {
    path: "/blog",
    exact: false,
    key: "2",
    main: () => (
      <section>
        <Link to='/' className="mr3 ttu fw4 dim my-red">home</Link>
        <span className="ttu b bb my-red">blog</span>
      </section>
    )
  }
];

export default linkRoutes;
