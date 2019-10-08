import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../styles/_kieanas-tunes.scss';

const songData = [
    {
        title: 'Best Believe',
        artist: 'The Dip',
        description: 'This song says it plain and simple: you better believe that I\'ll be loving yo cute ass forever! The lyrics aren\'t too lengthy, but this song\'s tune, happy vibe, and overall message compose the ideal opener for this playlist.',
        has_lyrics: true,
        stand_out: 'When that day comes, best believe that I\'m gonna be forever loving you'
    },
    {
        title: 'Time',
        artist: 'Poppy Ackroyd',
        description: 'Listening to this song, I envision a table with your tablet and a cluster of papers with scribbles and notes. Next to it a markerboard full of formulas, problems, and more Greek symbols than you can imagine. I see you studying hard, headphones in, learning, persisting, and solving problems. I see the productive, passionate nerd that I fell in love with. Personally, this is my favourite song on the playlist.',
        has_lyrics: false
    },
    {
        title: 'In This Moment',
        artist: 'Gavin Luke',
        description: 'I think of the phrase you often tell me: \"It\'s just you and me\". I believe that this song perfectly embodies the feelings I have whenever we\'re in our own little bubble: everything is calm, everything is peaceful. Nothing else matters except this moment.',
        has_lyrics: false
    },
    {
        title: 'Water Ripples',
        artist: 'Enno Aare',
        description: 'This song reminds me of when you paint. You\'ve never painted in front of me, but I imagine it\'s very graceful and elagant, just like this song. I see a meticulous woman who knows that perfection cannot be rushed. Every brush stroke is planned out, as if it was a coordinated dance between two partners, and your result always being a beautiful piece of art.',
        has_lyrics: false
    },
    {
        title: 'Somebody',
        artist: 'Sigala ft. HRVY, Nina Nesbitt',
        description: 'This song reminds me of how far we\'ve come this year. More specifically, it reminds me of how much of a positive difference you made on my life. I\'ve become so much more confident in myself, and you\'ve given me a new purpose ... you make me feel like I\'m actually somebody.',
        has_lyrics: true,
        stand_out: 'I\'m wrapped up in your forgiveness, and without you I am nothing'
    },
    // {
    //     title: 'Give Me Your Love',
    //     artist: 'Sigala ft. John Newman, Nile Rodgers',
    //     description: 'This song ',
    //     has_lyrics: true,
    //     stand_out: 'I\'m wrapped up in your forgiveness, and without you I am nothing'
    // }
    {
        title: 'Talk Too Much',
        artist: 'COIN',
        description: 'I always chuckle a little bit when I listen to this song because it reminds me of every time I was rambling on about something and you would impatiently say "Okay!" It\'s funny because I DO in fact ramble on sometimes, I get it after my dad. In this song, the artist suggests to his S.O to give him a kiss to shut him up, and I firmly believe that you should adopt that same method when you want me to stop rambling 😉',
        has_lyrics: true,
        stand_out: 'Honey, come put your lips on mine, and shut me up '
    },
    {
        title: 'Sunrise',
        artist: 'Kygo ft. Jason Walker',
        description: 'This was the first song added to this playlist, the one that started it all. Its music hits such a precise part of me whose sole purpose is to remind me about every wonderful thing about you, I don\'t know how to explain it. It is a feeling that combines excitment, faith, joy, and what you felt the day before a field trip back in elementary school.',
        has_lyrics: true,
        stand_out: 'Call my name \'cause I\'m so lost and I don\'t know this place'
    },
    {
        title: 'One With You',
        artist: 'Rick Jolt',
        description: 'This song reminds me of that moment when we\'re in your room in Waterloo, shut off the lights and turn on the bed lights, cuddle under the blanket and just hold each other. It\'s a similar feeling to what I experience when I listen to "In This Moment" by Gavin Luke.',
        has_lyrics: false
    },
    {
        title: 'Arabian Nights',
        artist: 'Will Smith',
        description: 'You already know I gotta include this banger on here 🔥 Aladdin was always my favourite Disney film, and seeing how excited you were about the live action version made me so happy. You already know we\'re buying a DVD copy when it\'s released.',
        has_lyrics: true,
        stand_out: 'Where you wander among every culture and tongue. It\'s chaotic but hey, it\'s home'
    },
    {
        title: 'The Good Good',
        artist: 'Snoop Lion ft. Iza Lach',
        description: 'Snoop\'s lyrics hit the nail right on the head when it comes to describing our relationship. We found each other right on time. We have each other\'s backs. We understand each other. We\'re one of a kind, and we\'re gonna do incredible things together 🥰',
        has_lyrics: true,
        stand_out: 'Love the way you say my name and how you laugh at all the stupid things I say'
    },
    {
        title: 'Forever',
        artist: 'Andy Grammer',
        description: 'We finish off this playlist on a light note. This song reminds me of all the times I gotta wait for you to get ready before we go out 😂, but just like Mr. Grammer says, you\'re always worth waiting for.',
        has_lyrics: true,
        stand_out: 'But when you finally smile, \'cause it\'s just right, damn you look beautiful'
    }
];
class KieanasTunes extends Component {
    componentDidMount() {
        document.title = "Kieana's Tunes";
    }

    render() {
        return (
            <div className='pt4'>
                <div className='bg-white card-shadow br3 pv3 ph4 mt3 mh3'>
                    <h1 className='f1'>Kieana's Tunes ❤️</h1>
                    <span style={{lineHeight: '1.6', opacity: '100%'}}className='black-54'>Cat's out of the bag. Here's a little project I dedicated to you for our one year anniversary.<br/>Some time in February this year, I decided to create a playlist of songs that remind me of you. Now, they can't just be some basic love songs or anything like that. No, each song must have some unique attribute to it that reminds me of you, and this page is dedicated to outlining every song's reason.</span>
                    <div className='h2'></div>
                </div>
                <div className='db flex-l justify-center mh3 mv4'>
                    <div className='flex flex-column-l justify-center pr5-l mb3 mh0-l'>
                        <h1 className='black-54'>Hope you enjoy 😙💕</h1>
                    </div>
                    <iframe className='center fl-l mh0-l' src="https://open.spotify.com/embed/playlist/1BmGIVKhEgDLQgfm9ffmpj" style={{display: 'block'}} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <div className='bg-white card-shadow br3 pv3 ph4 mh3 mb6'>
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
                                    <div key={value.title} className='tl my-slide content'>
                                    <h1 className='mb4'>
                                        "{value.title}" - <span className='fw4 black-54'>{value.artist}</span>
                                    </h1>
                                    {/* <div className='pv3'> */}
                                        <span className='black-54 f6'>Why this song reminds me of you</span>
                                        <p className='pt0 mt1 mb4 black-87'>
                                            {value.description}
                                        </p>
                                    {/* </div> */}
                                    <span className='black-54 f6'>A lyric that stands out for me</span>
                                    <p className={"pt0 mt1 black-87" + (value.has_lyrics ? " i" : "")}>
                                        {value.has_lyrics ? `"${value.stand_out}"` : "No lyrics."}
                                    </p>
                                    <p></p>
                                    </div>
                                );
                            })
                        }
            </Carousel>
            <p className='black-54 mt0 pt0 f6 tc'>(You can also use the arrow keys to move)</p>
            </div>
            {/* <div className='center'> */}
           
            {/* </div> */}
        </div>
        );
    }
}

export default KieanasTunes;