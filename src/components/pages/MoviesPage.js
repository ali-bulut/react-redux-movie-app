import React, { Component } from 'react'
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import {fetchMovies, deleteMovie} from '../../actions/movies';

import MoviesList from '../MoviesList';

class MoviesPage extends Component {
    static propTypes={
        data:PropTypes.object.isRequired,
        deleteMovie:PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchMovies();
    }
    

    render() {
        return (
            <div>
                <h2>Movies</h2>
                {/* Direkt MoviesList componenti içinde redux connect ile de alabilirdik. 
                Fakat bu bileşende prop drilling ile yaptık.
                Birden fazla yerde kullanacağınız bir bileşen ise redux connect ile  yapmak daha doğru olacaktır. */}
                <MoviesList data={this.props.data} deleteMovie={this.props.deleteMovie}/>
            </div>
        )
    }
}

//bunu kullanarak global state üzerinde bulunan "movies" 
//alanını kullanacağımız component üzerinde bir props olarak almamızı sağlıyor
const mapStateToProps = state => {
    return {
        data:state.data
    }
}

const mapDispatchToProps = {
    fetchMovies:fetchMovies,
    deleteMovie:deleteMovie
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);