import React, {Component} from 'react';

class Music extends Component {

    state = {play: false};

    audio = new Audio(this.props.url);
    bgImg = this.props.bgImg;

    componentDidMount() {
        this.listener = this.audio.addEventListener("ended", () => this.setState({play: false}));
    }

    componentWillUnmount() {
        this.audio.pause();
        this.audio.removeEventListener("ended", () => this.setState({play: false}));
    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
      }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{cursor: 'pointer' ,backgroundImage: 'url(' + this.bgImg + ')', backgroundSize: 'cover', width: 300, height: 300, margin: 'auto'}} onClick={this.togglePlay}>
                {this.state.play ? <i style={{fontSize: 75}} className="fa">&#xf28b;</i> : <i style={{fontSize:75}} className="fa">&#xf144;</i>}
            </div>
        )
    }

}

export default Music;