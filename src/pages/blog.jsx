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
        <div className="content">
          <ul className='list f6 pl0 mv0'>
            {
              metadata.map((item, index) => (
                <li style={{paddingBottom: '3rem'}} key={index}>
                  <Link to={{pathname: `/blog/${item.slug}`, query: item }}>
                    <h1 className='link hover-red black-87 fw5 mt0 mb2 ttc'>{item.title}</h1>
                    <span className='black-54'>{item.posted}</span>
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
