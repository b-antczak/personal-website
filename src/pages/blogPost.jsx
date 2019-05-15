import React, { Component } from 'react';
import Header from '../components/header';
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
      const paths = this.props.location.pathname.split('/');
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
    let html = '<div></div>';
    if (this.state.content) {
      html = converter.makeHtml(this.state.content);
    }
    return (
      <div className='blogpage'>
        <Header />
        <div className='content'>
          <p className='f1 fw3 mv0 ttc'>{this.state.title}</p>
          <span className='my-red'>{this.state.posted}</span>
          <div className='pt5'>
            <Markup content={html} />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
