import React from "react";
import {PropTypes} from 'prop-types';

import {Grid} from 'semantic-ui-react'

import MovieCard from './MovieCard'

const MoviesList = props => {
    const emptyMessage =(
        <p>There are no movies yet!</p>
    );

    const moviesList=(
        <div>
            {
                props.data.error.response ? <h3>Error retrieving data!</h3> 
                :
                <Grid stackable columns={3}> 
                {props.data.movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
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
