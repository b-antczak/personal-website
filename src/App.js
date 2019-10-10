import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import BlogPost from './pages/blog-post';
import KieanasTunes from './pages/special/kieanas-tunes';
import './styles/_index.scss';
import Footer from './components/footer';
import Header from './components/header';
// https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container main-font">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path='/blog/:slug' component={BlogPost}/>
            { /* Kieana's anniversary present */}
            <Route exact path='/kieanas-tunes' component={KieanasTunes}/>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
