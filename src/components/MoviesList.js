import React from "react";
import {PropTypes} from 'prop-types';


const MoviesList = props => {
    const emptyMessage =(
        <p>There are no movies yet!</p>
    );

    const moviesList=(
        <div>
            {
                props.data.error.response ? <h3>Error retrieving data!</h3> : 'No Error'
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
