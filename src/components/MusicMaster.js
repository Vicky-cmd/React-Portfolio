import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

class MusicMaster extends Component{
    state = {artistId: '', artist: '', tracks: []}

    searchArtist = artistQuery => {
        console.log('this.state',this.state);
        const url = "https://spotify-api-wrapper.appspot.com/artist/" + artistQuery;
        fetch(encodeURI(url))
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if(json.artists.total >0) {
                    if((typeof json.artists.items[0].id) !== 'undefined') {
                        const artist = json.artists.items[0];
                        this.setState({artistId: json.artists.items[0].id, artist});
                        this.fetchTracks()
                    }
                }
            }).catch(error => alert(error.message));
    }
    
    fetchTracks = () => {
        const artistId = this.state.artistId;
        const url = "https://spotify-api-wrapper.appspot.com/artist/"+ artistId +"/top-tracks"
        fetch(encodeURI(url))
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const tracks = json.tracks;
                this.setState({tracks});
            }).catch(error => alert(error.message));
    }

    render() {
        return (
            <div style={{padding: '2.5%'}}>
                <h1>Music Master</h1>
                <br/>
                <Search searchArtist={this.searchArtist} />
                <br/><br/>
                {
                    this.state.artist!==''?<Artist items={this.state.artist}/>:null
                }
                {
                    this.state.tracks!==''?<Tracks tracks={this.state.tracks}/>:null
                }
            </div>
        );
    }
}

export default MusicMaster;