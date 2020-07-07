import React, { useState, setState } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import useNavi from './hooks/useSticky';
// import { useForm } from 'react-hook-form';

//class App extends Component {
function App() {  
  // render() {
    const { isFlow } = useNavi();
    const [opacity, setOpacity] = useState(0);
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);
    const [opacity4, setOpacity4] = useState(0);
    // const {contactMe, handleSubmit, errors} = useForm();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = () => {
      
      const data = {
        name,
        email,
        message
      }

      console.log(data);
      // fetch('http://localhost:3002/send',{
      //   method: "POST",
      //   body: JSON.stringify
      // })

      // setName();
      // setEmail();
      // setMessage();

    }

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
          <a href='https://www.linkedin.com/in/alexander-lee-3abb1546/'>
            <img src={require('../src/assets/imgs/Banner1.jpg')} alt="abtMe" width='100%' height='100%'/>
          </a>
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
          <div  className="portfolio-box">
            <a href="https://shielded-headland-00192.herokuapp.com/" onMouseOver={() => setOpacity2(0.75)} onMouseOut={() => setOpacity2(0)}>
              <div className="imgCaption" style={{opacity: opacity2}}>
                <div className="title">
                  TYT NewsScrape
                </div>
                <div className="desc">
                A marriage of Cherrio and Mongo DB that brings you trusted news and podcasts.
                </div>
                <small className="text-muted">::git repo::<a href="https://github.com/lobo89x/NewsScrape.git">here</a></small>
              </div>
              <img src={require("../src/assets/imgs/avatars-000060717147-7egjya-t500x500.jpg")} alt="wordguess" width='100%' height='100%'/>
            </a>
          </div>
          <div  className="portfolio-box">
            <a href="https://numbernauts.herokuapp.com/" onMouseOver={() => setOpacity3(0.75)} onMouseOut={() => setOpacity3(0)}>
              <div className="imgCaption" style={{opacity: opacity3}}>
                <div className="title">
                Numbernauts
                </div>
                <div className="desc">
                A react game that is intended to help math practice. It uses React, Hooks, Redux, Socket IO, and Mongo DB.
                </div>
                <small className="text-muted">::git repo::<a href="https://github.com/lobo89x/numbernumbergame.git">here</a></small>
              </div>
              <img src={require("../src/assets/imgs/player_1.png")} alt="wordguess" width='100%' height='100%' style={{backgroundColor:'black'}}/>
            </a>
          </div>
          <div  className="portfolio-box">
            <a href="https://photosbylee.herokuapp.com/" onMouseOver={() => setOpacity4(0.75)} onMouseOut={() => setOpacity4(0)}>
              <div className="imgCaption" style={{opacity: opacity4}}>
                <div className="title">
                Photos by Lee
                </div>
                <div className="desc">
                A React phot gallery where I am playing with multiple gallery components and several images from my phone.
                </div>
                {/* <small className="text-muted">::git repo::<a href="https://github.com/lobo89x/NewsScrape.git">here</a></small> */}
              </div>
              <img src={require("../src/assets/imgs/CoverIg.jpg")} alt="wordguess" width='100%' height='100%'/>
            </a>
          </div>
        </div>
        <div className="contactMe">
          <img src="" alt="contactMe" href="" />
          <form id="contact-form" onSubmit={handleSubmit()} method="POST">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input name='name' type="text" className="form-control" onSubmit={setName(this.value)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input name='email' type="email" className="form-control" aria-describedby="emailHelp" onSubmit={setEmail(this.value)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name='message ' className="form-control" rows="5" onSubmit={setMessage(this.value)}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
//  }
}

export default App;
