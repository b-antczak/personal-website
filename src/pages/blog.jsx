import React, { Component } from 'react';
import showdown from 'showdown';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import Header from '../components/header';
// This lists the blog posts 
import metadata from '../api/blog/metadata';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../api/blog', false, /\.md$/));

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  async componentDidMount() {
    document.title = "Blog | Bartosz Antczak";
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
    .catch((err) => console.error(err));
    console.log('comp did mount:', markdownFiles);
    this.setState({posts: posts});
  }

  render() {
    return (
      <div className="blogpage">
        <Header />
        <div className="content">
          <ul className='list f6 pl0 mt3 mb0'>
            {
              metadata.map((item, index) => (
                <li className='pv2' key={index}>
                  <Link to={{pathname: `/blog/${item.slug}`, query: item }}>
                    <h4 className='link dim black-87 f2 fw5 mb2 ttc'>{item.title}</h4>
                    <span className='my-red'>{item.posted}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Blog;
