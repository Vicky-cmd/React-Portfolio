import React, {Component} from 'react';

const TITLES = [
    'a Software Engineer',
    'a Music Lover',
    'an Enthusiastic Learner',
    'always eager to learn new things'
]
 
class Title extends Component {
    state = {selectedIndex:0, fadeIn:0};

    componentDidMount() {
        console.log("Inside ComponentDidMount Method    ");
        this.timeout = setTimeout(() => {
            this.setState({fadeIn: false})
        }, 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        console.log("Inside componentWillUnmount Method    ");
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const selectedIndex = (this.state.selectedIndex + 1) % TITLES.length;
            this.setState({selectedIndex, fadeIn:true});
            this.timeout = setTimeout(() => {
                this.setState({fadeIn: false})
            }, 2000);
        }, 4000);
        console.log("this.titleInterval", this.titleInterval);
    } 

    render() {
        const {selectedIndex, fadeIn} = this.state;
        const Title = TITLES[selectedIndex];

        return (
            <p className={fadeIn? 'title-toggle-fade-in':'title-toggle-fade-out'}>I'm {Title}</p>
        )
    }
}


export default Title;