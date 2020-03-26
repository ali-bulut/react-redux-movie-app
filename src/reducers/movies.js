import {FETCH_MOVIES, FETCH_MOVIES_ERROR} from '../actions/movies';

const initalState={
    error:{},
    movies:[]
};


export default (state=initalState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies:action.payload
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}