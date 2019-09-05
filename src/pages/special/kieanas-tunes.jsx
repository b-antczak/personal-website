import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../styles/_kieanas-tunes.scss';

const songData = [
    {
        title: 'Best Believe',
        description: 'Here is a desc',
        stand_out: 'The lyric tht stands outhe lyric tht stands outhe lyric tht stands out he lyric tht stands out he lyric tht stands out he lyric tht stands outhe lyric tht stands outhe lyric tht stands out'
    },
    {
        title: 'Time',
        description: 'Listening to this song, I envision a table with your tablet and a cluster of papers with scribbles and notes. Next to it a marker board full of formulas, problems, and more Greek symbols than you can imagine. I see you studying hard, headphones in, learning, persisting, and solving problems. I see the productive, passionate nerd that I fell in love with. Personally, this is my favourite song on the playlist.',
        stand_out: 'No lyrics.'
    },
    {
        title: 'In This Moment',
        description: 'I think of the phrase you often tell me: \"It\'s just you and me\". I believe this song perfectly embodies the feelings I have whenever we\'re in our own little bubble: everything is calm, everything is peaceful. Nothing else matters except this moment.',
        stand_out: 'No lyrics.'
    }
];
class KieanasTunes extends Component {
    render() {
        return (
            <div>
                <h1>Kieana's Tunes</h1>
                <p>Cat's out of the bag. Here's a little project I dedicated to you for our anniversary.<br/>Some time in February this year, I decided to create a playlist of songs that remind me of you. Now, they can't just be some basic love songs or anything like that. No, each song must have some unique attribute to it that reminds me of you, and this page is dedicated to outlining every song's reason.</p>
                <iframe src="https://open.spotify.com/embed/playlist/1BmGIVKhEgDLQgfm9ffmpj" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                showStatus={false}
                showThumbs={false}
                className='presentation-mode'>
                    {
                        songData.map((value) => {
                            console.log(value);
                            return (
                                <div key={value.title} className='my-slide content'>
                                <h1>
                                    {value.title}
                                </h1>
                                <span className='black-87 f6 i'>Why this song reminds me of you</span>
                                <p className='pt0 mt2'>
                                    {value.description}
                                </p>
                                <span className='black-87 f6 i'>A lyric that stands out</span>
                                <p className='pt0 mt2'>
                                    {value.stand_out}
                                </p>
                                <p></p>
                                </div>
                            );
                        })
                    }
            <div className='my-slide primary'>
                
                <p className="legend">Legend 1</p>
            </div>
            <div className='my-slide content'>
                
                <p className="legend">Legend 2</p>
            </div>
            <div className='my-slide content'>
                
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        </div>
        );
    }
}

export default KieanasTunes;