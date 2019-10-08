import React, { Component } from 'react';
import headshot from '../images/fullbody.jpg';
import Header from '../components/header';

import showdown from 'showdown';
import { Markup } from 'interweave';
import aboutMarkdown from '../markdowns/home/home.md';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
  }

  componentDidMount() {
    document.title = "Home | Bartosz Antczak";
    fetch(aboutMarkdown)
      .then(res => res.text())
      .then(post => this.setState({content: post}));
  }

  render() {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(this.state.content);

    return (
      <div className="homepage">
          <div className='content'>
            <Markup content={html} />
          </div>
        {/* <div className="content dt">
          <div className="dtc v-top">
            <img src={headshot} className="mw5 br-100 my-shadow db" alt="A headshot of me" />
          </div>
          <div className="dtc v-top pl5">
            <Markup content={html} />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Home;
