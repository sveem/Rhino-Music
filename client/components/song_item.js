import React from 'react';

const SongItem = (props) => {
  const songImg = props.tracks.items[0].external_urls.images[2].url;
  return (
    <li className="list-group-item">
      <div className="song-list-media">
        <div className="song-left">    	
          <img className="song-object" src={songImg} />
        </div>

        <div className="song-body">
          <div className="song-heading">{props.tracks.item[0].name}</div>
        </div>
      </div>
    </li>
  );
};

export default SongItem;