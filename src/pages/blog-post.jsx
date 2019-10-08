import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import metadata from '../api/blog/metadata';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';
import { Markup } from 'interweave';
import '../styles/highlight.css';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.findPostWithSlug = this.findPostWithSlug.bind(this);
    this.loadContent = this.loadContent.bind(this);
    const q = props.location.query;
    let file = '';
    if (q != null) {
      this.state = {
        posted: q.posted,
        title: q.title
      };
      file = q.file;
    } else {
      // we determine the post info through the search query
      const paths = props.location.pathname.split('/');
      for (let i = 0; i < paths.length; ++i) {
        if (paths[i] === 'blog') {
          const slug = paths[i+1]; // we're guranteed that this terminates without error
          const post = this.findPostWithSlug(slug);
          this.state = {
            posted: post.posted,
            title: post.title
          };
          file = post.file;
          break;
        }
      }
    }
    // At this point, this.state.file is not blank; load content
    this.state.content = '';
    this.loadContent(file);
  }

  findPostWithSlug = (slug) => {
    // find the post with the respective slug. Takes linear time, but we'll leave it for now.
    for (let i = 0; i < metadata.length; ++i) {
      if (metadata[i].slug === slug) {
        return metadata[i];
      }
    }
    return null;
  }

  // Solved using: https://stackoverflow.com/a/42928796
  async loadContent(file) {
    const filepath = require(`../api/blog/${file}`);
    fetch(filepath)
      .then(response => response.text())
      .then(text => this.setState({ content: text }));
  }

  async componentDidMount() {
    document.title = `${this.state.title} - Bartosz Antczak`;
  }

  render() {
    const converter = new showdown.Converter({ extensions: [showdownHighlight] });
    const { content, title, posted } = this.state;
    let html = '<div></div>';
    if (content) {
      html = converter.makeHtml(content);
    }
    return (
      <div className='blogpage'>
        <div className='content'>
          <div className='flex items-center pb3 black-54'>
            <Link to='/blog' className='link'>Posts</Link><span className='mh3'>/</span>{title}
          </div>
          <div className='bb b--black-20 pb4'>
            <h1 className='f1 fw3 mt0 ttc lh-title fw7'>{title}</h1>
            <span className='black-54'>{posted}</span>
          </div>
          <div className='f4' style={{paddingTop: '3rem'}}>
            <Markup content={html} />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
