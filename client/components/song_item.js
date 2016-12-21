import React from 'react';
import spotify from '../../spotifyData.js';

const SongItem = () => {
  const songImg = window.spotify.album.images[1].url;
  console.log(window.spotify)
  return (
    <li className="list-group-item">
      <div className="song-list-media">
        <div className="song-left">    	
          <img className="song-object" src={songImg} />
        </div>

        <div className="song-body">
          <div className="song-heading">{window.spotify.name}</div>
        </div>
      </div>
    </li>
  );
};

export default SongItem;