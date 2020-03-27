import React, { Component } from 'react';
import {connect} from 'react-redux';

import {onNewMovieSubmit, fetchMovie, onUpdateMovieSubmit} from '../../actions/newMovie';

import NewMovieForm from '../NewMovieForm'

class NewMoviePage extends Component {
    componentDidMount() {
        const match=this.props.match;
        if(!this.props.editMovie && match.params.id){
            this.props.fetchMovie(match.params.id)
        }
    }
    
    render() {
        return (
            <div>
                {!this.props.editMovie ? <h2>New Movie</h2> : <h2>Edit Movie</h2> }
                <NewMovieForm onNewMovieSubmit={this.props.onNewMovieSubmit} onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} newMovie={this.props.newMovie} editMovie={this.props.editMovie} />
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
        newMovie:state.newMovie,
        editMovie:state.data.movies.find(movie => movie._id === props.match.params.id)
    }
}

const mapDispatchToProps={
    onNewMovieSubmit:onNewMovieSubmit,
    fetchMovie:fetchMovie,
    onUpdateMovieSubmit:onUpdateMovieSubmit
}
 
export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);