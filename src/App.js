import React, { Component } from 'react';
import Projects from './components/Projects';
import SocialProfiles from "./components/SocialProfiles";
import profilePic from './assets/profile.png';
import Title from './components/Title';

class App extends Component{

    state = {displayBio: false};

   /*  constructor() {
        super();
        this.state = {displayBio: false};
        this.toggleDispBio = this.toggleDispBio.bind(this);
    } */


    toggleDispBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profilePic} alt="Profile Picture" className="profilePic" />
                <h1>Hello</h1>
                <div>
                    <p>I'm C. R. Raja Vignesh.</p>
                    <Title />
                </div>
                {
                    this.state.displayBio? (
                        <div>
                            <p>I live in India and working as an Assistant Systems Engineer in TCS.</p>
                            <p>I also like listening to music and reading books.</p>
                            <p>Interested Technologies:</p>
                            <ul>
                                <li>Java - Spring, Springboot, hibernate</li>
                                <li>Docker and Kubernetes</li>
                                <li>Big Data</li>
                                <li>Dev Ops</li>
                            </ul>
                            <div><button className='btn' onClick={this.toggleDispBio}>Read Less</button></div>
                        </div>
                    ):<div><button className='btn' onClick={this.toggleDispBio}>Read More</button></div>
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App