import React from 'react';

const Artist = props => {
    const {followers, genres, images, name, external_urls} = props.items;
    
        return (
            <div>
                <a href={external_urls.spotify}><img className="artistPic" src={images[0].url} alt={name} /></a>
                <h3>{name}</h3>
                <h4>Genre</h4>
                <p>{genres.map(genre => (genre + " "))}</p>
                <h4>Folowers</h4>
                <p>{followers.total}</p>
            </div>
        );
}

export default Artist;