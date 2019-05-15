import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import BlogPost from './pages/blogPost';
import './styles/_index.scss';
// https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container heebo">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path='/blog/:slug' component={BlogPost}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
