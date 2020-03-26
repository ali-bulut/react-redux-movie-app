import React from "react";
import {PropTypes} from 'prop-types';


const MoviesList = props => {
    const emptyMessage =(
        <p>There are no movies yet!</p>
    );

    const moviesList=(
        <div>
            Movies List
        </div>
    )
  return(
    <div>
        {
            props.movies.length === 0 ? emptyMessage : moviesList
        }
    </div>
  );
};

MoviesList.propTypes={
    movies:PropTypes.array.isRequired
}

export default MoviesList;
