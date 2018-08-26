import React, { Component } from 'react';
import Movie from './movie';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    { this.props.movies.map((movie, key) => {
                        return <Movie key={ movie.movie_title } movie={ movie } />
                    })}
                </div>
            </div>
        )
    }
}