import axios from 'axios';
import {API_BASE} from '../config/env'

export const FETCH_MOVIES="FETCH_MOVIES";
export const FETCH_MOVIES_ERROR="FETCH_MOVIES_ERROR";

export function fetchMovies(){
    return dispatch => {
        dispatch({
            type:FETCH_MOVIES,
            payload:axios.get(`${API_BASE}/movies`)
            .then(result => result.data)
        })
    }
}