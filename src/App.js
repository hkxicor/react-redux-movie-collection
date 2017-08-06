import React, { Component } from 'react';
import { connect } from 'react-redux'

import Polybackground from './components/Polybackground'
import MovieDetail from './components/MovieDetail'
import WatchedMovie from './components/WatchedMovie'
import NavigationBar from './components/NavigationBar'
import Loading from './components/Loading'

import { containsObject } from './reducers/movie'

import { MAKE_WATCHED, START_PROCESSING, STOP_PROCESSING, CHANGE_CURRENT, CHANGE_STATUS } from './actions.js'

class App extends Component {
  isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
  }
  render() {
    const { movie, searchMovie, pushWatched, changeStatus } = this.props
    let watched = containsObject(movie.current,movie.watched)
    return (
      <div className="App">
        <NavigationBar searchMovie={searchMovie} />
        <Polybackground />
        {
          movie.isProcessing && <Loading />
        }
        {
          (!this.isEmpty(movie.current) && !movie.isProcessing ) &&
          <MovieDetail movie={movie.current} watched={watched} makeWatched={pushWatched} />
        }
        <div className="container"><hr/></div>
        <WatchedMovie changeStatus={changeStatus} movies={movie.watched} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie
})

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (searchText) => {
    dispatch({type: START_PROCESSING})
    fetch('http://www.omdbapi.com/?t='+searchText+'&apikey=aabca0d')
      .then((res) => {
        if(!res.ok) {
          throw Error(res.statusText)
        }
        return res
      })
      .then((res) => res.json())
      .then( (data) => {
          dispatch({type: CHANGE_CURRENT, payload: data})
          dispatch({type: STOP_PROCESSING})
    })
  },
  pushWatched: (movie) => {
    dispatch({type: MAKE_WATCHED, payload: movie})
  },
  changeStatus: (like,Title) => {
    dispatch({type: CHANGE_STATUS, payload: {like,Title}})
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
