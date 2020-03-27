import React from "react";
import {PropTypes} from 'prop-types';

import {Grid} from 'semantic-ui-react'
import {HashLoader} from 'react-spinners'

import MovieCard from './MovieCard'

const MoviesList = props => {
    const emptyMessage =(
        <p>There are no movies yet!</p>
    );

    const moviesList=(
        <div>
            <HashLoader color={'#36bdb3'} size={40} loading={props.data.fetching}/>

            {
                props.data.error.response ? <h3>Error retrieving data!</h3> 
                :
                <Grid stackable columns={3}> 
                {props.data.movies.map(movie => <MovieCard key={movie._id} deleteMovie={props.deleteMovie} movie={movie}/>)}
                </Grid>
            }
        </div>
    )
  return(
    <div>
        {
            props.data.length === 0 ? emptyMessage : moviesList
        }
    </div>
  );
};

MoviesList.propTypes={
    data:PropTypes.shape({
        movies:PropTypes.array.isRequired
    }).isRequired
}

export default MoviesList;
