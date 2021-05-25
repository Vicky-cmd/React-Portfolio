import React, {Component} from 'react';

const formatTime = value => {
    return (value>10?value:("0" + value))
}

class Track extends Component {

    togglePlay = audioUrl => () => {

        this.props.togglePlay(audioUrl);

    }

    componentDidMount() {
        console.log("Inside Mount", this.props.play);
    }

    render() {

    console.log("Rendered!");
    const play = this.props.play;
    const {album, duration_ms, external_urls, name, popularity, preview_url} = this.props.track;
    const {images, release_date} = album;
    const album_name = album.name;
    const album_urls = album.external_urls;

    const hrs = parseInt(duration_ms / (1000*60*60));
    const hrs_rem = duration_ms % (1000*60*60);
    const mins = parseInt(hrs_rem / (1000*60));
    const mins_rem = hrs_rem % (1000 * 60);
    const sec = parseInt(mins_rem / (1000));
    const sec_rem = mins_rem % (1000);
    const msec = parseInt(sec_rem);
    
    return (
        <div className="trackItem">
            {/* <Music url={preview_url} bgImg={images[0].url}/><br/> */}
            <div className="d-flex align-items-center justify-content-center albumImage" style={{cursor: 'pointer' ,backgroundImage: 'url(' + images[0].url + ')', backgroundSize: 'cover'}} onClick={this.togglePlay(preview_url)}>
                {console.log("URL ",preview_url)}
                {
                    (preview_url)? 
                    (
                        play ? 
                            <i style={{fontSize: 75}} className="fa">&#xf28b;</i> : 
                            <i style={{fontSize:75}} className="fa">&#xf144;</i>
                    ) : <i style={{fontSize:75}} className="fa">&#xf05e;</i>
                }
            </div>
            <h4>Album<br/><a href={album_urls.spotify}>{album_name}</a></h4>
            <p>Release Date {release_date}</p>
            <h4>Track<br/><a href={external_urls.spotify}>{name}</a></h4>
            <p>Duration { formatTime(hrs) + ":" + formatTime(mins) + ":" + formatTime(sec) + "." + msec }</p>
            <p>Populartiy: {popularity}</p>
        </div>
    )
    }
}
class Tracks extends Component {
    state = {audio: undefined, play: false, curUrl: '', prevUrl:''};
    togglePlay = audioUrl => {

        console.log(this.state.play);
        if(!this.state.play) {
            let audio = this.state.audio;

            if((typeof audio === 'undefined') || this.state.prevUrl !== audioUrl) {
                audio = new Audio(audioUrl);
            }
            audio.play();
            this.setState({audio, play: true, prevUrl: audioUrl});
        } else if(this.state.prevUrl === audioUrl){
            this.state.audio.pause();
            this.setState({play: false});
        } else {
            const audio = new Audio(audioUrl);
            this.state.audio.pause();
            audio.play();
            this.setState({audio, play: true, prevUrl: audioUrl});
        }

    }
    renderPlayOrPauseIcon = track => {
        const previewUrl =track.preview_url;
        if(!previewUrl) {
            return false;
        } else if(this.state.play && this.state.prevUrl === previewUrl) {
            return true;
        } else {
            return false;
        }
    }
    render() {
    const scroll = (scrollOffset) => {
        document.getElementsByClassName("tracksCss")[0].scrollLeft += scrollOffset;
    };
    const tracks = this.props.tracks;
    return (
        <div>
            {
                tracks.length>0?
                (
                    <div>
                        <button className="scrollbar btn"  onClick={() => scroll(-100)}>&lt;</button>
                        <button className="scrollbar btn" onClick={() => scroll(100)}>&gt;</button>
                    </div>
                ):null
            }
            <div className="tracksCss">
                {
                    tracks.map(track => (
                        <Track key={track.id} track={track} togglePlay={this.togglePlay} play={this.renderPlayOrPauseIcon(track)}/>
                    ))
                }
            </div>
            {
                tracks.length>0?
                (
                    <div>
                        <button className="scrollbar btn"  onClick={() => scroll(-100)}>&lt;</button>
                        <button className="scrollbar btn" onClick={() => scroll(100)}>&gt;</button>
                    </div>
                ):null
            }
        </div>
    )
    
    }
}

export default Tracks;