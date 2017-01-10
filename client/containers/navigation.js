import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/index';
import { playSong } from '../actions/songs';
import { fetchNews } from '../actions/news_nytimes';
import { fetchEvents } from '../actions/events';
import { bindActionCreators } from 'redux';
import nyTimesData  from '../containers/nytimes_data';
import getPlaylists from '../actions/playlists';
import AppBar from 'material-ui/AppBar';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

export const teal900 = '#004D40';

const styles = {
  bar: {
    "background-color": teal900,
    backgroundColor: teal900
  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

 render() {
 	console.log("NAVIGATION2", this.props)
  console.log("Container", nyTimesData)
  // let profile = <a href="/profile"></a>
   return (

    <AppBar
     style={styles.bar}
      title="Rhino Music"
      iconElementLeft={ <IconButton iconStyle={styles.largeIcon} style={styles.large}><ActionHome /></IconButton>}
      onLeftIconButtonTouchTap = {()=> {hashHistory.push("/")}}
      iconElementRight = {
       <div>
       <Tabs style={styles.bar}>
          <Tab style={styles.bar} label="Playlists" value={0} containerElement={<Link to="/MyMusic"/>} />
          <Tab style={styles.bar} label="Events" value={1} containerElement={<Link to="/Events"/>}/>
          <Tab style={styles.bar} label="Videos" containerElement={<Link to="/Youtube"/>}/>
          <Tab style={styles.bar} label="News" containerElement={<Link to="/News"/>}/>
        </Tabs>
         <SwipeableViews
          style={styles.bar}
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
        <div></div>
       // <button onClick={() => console.log("EVENTS EVENTS EVENTS")}>Events</button>  
       // <button onClick={() => console.log("VIDEOS VIDEOS VIDEOS")}>Videos</button>
       // <button onClick={() => console.log("NEWS NEWS NEWS")}>News</button>

       // <button>Profile</button>
       // <button>Logout</button>
       </SwipeableViews>
       </div>
     }
    />

  )
 }
}

function mapStateToProps(state) {	
  return {
  	news: state.news,
  	tracks: state.tracks,
  	playSong: state.playSong,
    events: state.events,
    getPlaylists: state.playlists
  }; 

}

export default connect(mapStateToProps, { getPlaylists })(Navigation);