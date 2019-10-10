import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import  headshot from '../images/headshot.jpg';

const NAV_ROUTES = [
  {
    path: '/',
    exact: true,
    key: '1',
    main: () => (
      <section>
        <span className='mr3 mv0 fw6 ttc dib black-87'>home</span>&nbsp;
        <Link to='/blog' className='link ttc fw6 black-54 hover-red'>blog</Link>
      </section>
    )
  },
  {
    path: '/blog',
    exact: false,
    key: '2',
    main: () => (
      <section>
        <Link to='/' className='link mr3 fw6 ttc black-54 hover-red'>home</Link>&nbsp;
        <span className='dib ttc fw6 mv0 black-87'>blog</span>
      </section>
    )
  }
];

class Header extends Component {
  render() {
    return (
      <div className='ph3 flex flex-row flex-wrap items-center justify-between-ns justify-center'>
        <div className='flex items-center fw7 f4 black-30' style={{'letterSpacing': '-0.03em'}}>
        <img src={headshot} className='br-100' style={{width: '5rem', height: '5rem'}} />
          <Link to='/' className='ml3 link black-54 hover-red'>Bartosz Antczak</Link>
        </div>
        
        {/* Nav links */}
        <div className='self-center right pl4'>  
          {
            NAV_ROUTES.map((route, index) => (
              <Route
                component={route.main}
                exact={route.exact}
                key={route.key}
                path={route.path}
              />
            ))
          }
        </div>
    </div>
    );
  }
}

export default Header;
