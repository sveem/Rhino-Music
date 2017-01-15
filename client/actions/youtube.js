import axios from 'axios';
import { FETCH_VIDEOS } from '../constants/ActionTypes';

export fetchVideos = (term) => {
	var videos = axios.post('/api/videos', {body: term});
	return {
		type: "FETCH_VIDEOS",
		payload: videos
	};
}