import lodash from 'lodash'
import React, { Component } from 'react'; //find node mod named 'react' and put it into var React
import ReactDOM from 'react-dom';
// import Routes from './routes';
import SearchBar from './components/searchbar'
import SearchResults from './components/search_results'
// import RecList from './components/rec_list'
// import SongItem from './components/song_item'

class App extends Component {

 constructor(props) {
    super(props);

    // this.state = { 
    // 	songs: [],
    // 	selectedSong: null 
    // }
}	
  render () {
    return <div>
    		 <SearchBar />
    		 <SearchResults />
    	   </div>
  }
}
ReactDOM.render( < App / > , document.querySelector('.container'))
