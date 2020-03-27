import {NEW_MOVIE_FULFILLED, NEW_MOVIE_REJECTED, NEW_MOVIE_PENDING} from '../actions/newMovie';

const initalState={
    fetching:false,
    done:false,
    error:{},
    movies:[]
};


export default (state=initalState, action) => {
    switch (action.type) {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching:true
            }
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                movies:action.payload,
                fetching:false,
                done:true
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error:action.payload,
                fetching:false
            }
        default:
            return state;
    }
}