import {
    FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED, FETCH_MOVIES_PENDING,
    DELETE_MOVIE_FULFILLED, DELETE_MOVIE_REJECTED, DELETE_MOVIE_PENDING
} from '../actions/movies';

const initalState={
    fetching:false,
    error:{},
    movies:[]
};


export default (state=initalState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                fetching:true
            }
        case FETCH_MOVIES_FULFILLED:
            return {
                ...state,
                movies:action.payload,
                fetching:false
            }
        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error:action.payload,
                fetching:false
            }

        // to delete

            case DELETE_MOVIE_PENDING:
                return {
                    ...state
                }
            case DELETE_MOVIE_FULFILLED:
                return {
                    ...state,
                    movies:state.movies.filter(movie => movie._id !== action.payload._id)
                }
            case DELETE_MOVIE_REJECTED:
                return {
                    ...state,
                    error:action.payload
                }
        default:
            return state;
    }
}