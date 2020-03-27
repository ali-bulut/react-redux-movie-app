import React, { Component } from 'react';
import {connect} from 'react-redux';

import {onNewMovieSubmit} from '../../actions/newMovie';

import NewMovieForm from '../NewMovieForm'

class NewMoviePage extends Component {
    
    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <NewMovieForm onNewMovieSubmit={this.props.onNewMovieSubmit} newMovie={this.props.newMovie} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newMovie:state.newMovie
    }
}

const mapDispatchToProps={
    onNewMovieSubmit:onNewMovieSubmit
}
 
export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);