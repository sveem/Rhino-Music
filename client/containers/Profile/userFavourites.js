import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlaylists } from '../../actions/playlists';

class Favourites extends Component {
  constructor(props) {
    super(props);
  }	
  render () {
    console.log("props in favourites", this.props);
    return (
      <div>
        <h1>Playlists</h1> 
        <h1>Events</h1>	
      </div>    
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE IN FAVOURITES", state);
  return {
    events: state.events
  };
}

export default connect(mapStateToProps, null)(Favourites);


