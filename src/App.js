import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import useNavi from './hooks/useSticky';

//class App extends Component {
function App() {  
  // render() {
    const { isFlow } = useNavi();

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
          <img src="" alt="portfolio" href="" />
        </div>
        <div className="contactMe">
          <img src="" alt="contactMe" href="" />
        </div>
      </div>
    );
//  }
}

export default App;
