import React, { useState, setState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import useNavi from './hooks/useSticky';

//class App extends Component {
function App() {  
  // render() {
    const { isFlow } = useNavi();
    const [opacity, setOpacity] = useState(0);

    // const mouseOn = () => {
    //   setOpacity(0.5);
    // };
    // const mouseOff = () => {
    //   setOpacity(0);
    // };

    return (
      <div className="App">
          <Navbar 
          pageNav={isFlow}/>

        <div className="abtMe">
          <img src={require('../src/assets/imgs/Banner1.jpg')} alt="abtMe" width='100%' height='70%'/>
        </div>
        <p className="abtMe-text">
          Ever the free thinker, I have always enjoyed finding creative solutions to new problems. My time working with clients and training others in solutions development has taught me a unique set of skills that put me in a position to disseminate information to end users effectively while also being able to lend my talents to development and support staff and coordinate the interactions between the end user and the work being done behind the scenes. Now that I have completed my Fullstack Web Development Coding Certification from GaTech, I aim to bring this skillset to a new arena and further sharpen my front end and back end skills in MYSQL, HTML, CSS, Javascript, React and Angular just to name a few. I am continuing to hone my craft by sharpening my skill with code reviews, problems solving, web design and discovering newer languages and techniques. I hope to bring my skills and more to an organization and prove myself a great asset while building on my current abilities.
        </p>
        <div className="portfolio">
          <div  className="portfolio-box">

          <a href="https://lobo89x.github.io/Word-Guess-Game/" onMouseOver={() => setOpacity(0.75)} onMouseOut={() => setOpacity(0)}>
            <div className="imgCaption" style={{opacity: opacity}}>
              <div className="title">
                WordGuess: Tardis Edition
              </div>
              <div className="desc">
              A small hangman-esque game that illustrates use of JQuery, HTML, and CSS in concert.
              </div>
              <small className="text-muted">::git repo::<a href="https://github.com/lobo89x/Word-Guess-Game.git">here</a></small>
            </div>
            <img src={require("../src/assets/imgs/tenor.gif")} alt="wordguess" width='100%' height='100%'/>
          </a>
          </div>
          <a className="portfolio-box"></a>
          <a className="portfolio-box"></a>
          <a className="portfolio-box"></a>
        </div>
        <div className="contactMe">
          <img src="" alt="contactMe" href="" />
        </div>
      </div>
    );
//  }
}

export default App;
