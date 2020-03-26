import React, { Component } from 'react'
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class MoviesPage extends Component {
    static propTypes={
        movies:PropTypes.array.isRequired
    }
    render() {
        return (
            <div>
                <h2>Movies Page</h2>
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