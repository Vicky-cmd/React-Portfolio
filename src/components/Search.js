import React, {Component} from 'react';

class Search extends Component {

    state = {artistQuery: ''};

    updateArtistQuery = event => {
        //console.log("event.target.value", event.target.value);
        this.setState({artistQuery: event.target.value});
    }

    keypressHandler = event => {
        if(event.key === 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }    

    render() {

        return(
            <div>
                <div class="input-group">
                    <input className="form-control" onChange={this.updateArtistQuery} onKeyPress={this.keypressHandler} placeholder="Search for an Artist" />
                    <div class="input-group-prepend">
                        <button className="btn btn-warning" style={{borderRadius: "0px 5px 5px 0px"}}  onClick={this.searchArtist}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;