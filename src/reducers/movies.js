import {FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED} from '../actions/movies';

const initalState={
    error:{},
    movies:[]
};


export default (state=initalState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_FULFILLED:
            return {
                ...state,
                movies:action.payload
            }
        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}