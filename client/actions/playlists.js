import axios from 'axios';
import { FETCH_PLAYLISTS } from '../constants/ActionTypes';

export getPlaylists = () => {
  let request = axios.get('/api/myMusic');
  return {
    type: FETCH_PLAYLISTS,
    payload: request
  }
}

export default getPlaylists;
