import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// This lists the blog posts 
import metadata from '../api/metadata';

class Blog extends Component {
  constructor(props) {
    super(props);
    document.title = 'Blog | Bartosz Antczak';
  }

  render() {
    return (
      <div className='blogpage'>
        <div className='content'>
          <ul className='list f6 pl0 mv0'>
            {
              metadata.map((item, index) => (
                <li style={{paddingBottom: '3rem'}} key={index}>
                  <Link to={{pathname: `/blog/${item.slug}`, query: item }}>
                    <h1 className='link hover-red black-87 fw6 mt0 mb2 ttc'>{item.title}</h1>
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
