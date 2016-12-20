import React from 'react';
import spotify from '../../spotifyData.js';
import SongItem from './song_item';
//import SearchBar from './searchbar';

const SearchResults = () => {
  console.log('SearchResutls', window.spotify);
  const songUrl = window.spotify;
  console.log(songUrl);
    
  return (
    <ul className="col-md-8 list-group">
      someData
    </ul>
    );	
} 
export default SearchResults;

