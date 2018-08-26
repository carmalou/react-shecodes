import React, { Component } from 'react';

export default class Movie extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href={ this.props.movie.movie_link }>
                <img className="card-img-top movie-pic" alt="" src={ this.props.movie.movie_pic} />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href={ this.props.movie.movie_link } className="movie-title">{ this.props.movie.movie_title }</a>
              </h4>
              <p className="card-text movie-desc">{ this.props.movie.movie_description }</p>
            </div>
          </div>
        </div>
        )
    }
}