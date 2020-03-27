import React from 'react';
import {Grid,GridColumn,Card} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TopMoviesList = (props) => {
    return (
        <div>
            <Grid stackable columns={3}> 
                {props.topMovies.map((movie, key) => (
                    <GridColumn key={key}>
                    <Card image={movie.image} header={movie.title} extra={movie.description} />
                  </GridColumn>
                ))}
                </Grid>
        </div>
    );
};

TopMoviesList.propType={
    topMovies:PropTypes.array.isRequired
}

export default TopMoviesList;