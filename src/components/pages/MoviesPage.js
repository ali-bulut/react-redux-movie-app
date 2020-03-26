import React, { Component } from 'react'
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import MoviesList from '../MoviesList';

class MoviesPage extends Component {
    static propTypes={
        movies:PropTypes.array.isRequired
    }
    render() {
        return (
            <div>
                <h2>Movies Page</h2>
                {/* Direkt MoviesList componenti içinde redux connect ile de alabilirdik. 
                Fakat bu bileşende prop drilling ile yaptık.
                Birden fazla yerde kullanacağınız bir bileşen ise redux connect ile  yapmak daha doğru olacaktır. */}
                <MoviesList movies={this.props.movies}/>
            </div>
        )
    }
}

//bunu kullanarak global state üzerinde bulunan "movies" 
//alanını kullanacağımız component üzerinde bir props olarak almamızı sağlıyor
const mapStateToProps = state => {
    return {
        movies:state.movies
    }
}

export default connect(mapStateToProps)(MoviesPage);