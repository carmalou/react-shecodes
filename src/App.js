import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchMovies from './Actions/fetchMovies';
import MovieList from './movielist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    FetchMovies().then((response) => {
      this.setState({
        movies: response
      });
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <MovieList movies={ this.state.movies }/>
      </div>
    );
  }
}

export default App;
