import React from 'react'
import MovieCard from './MovieCard'

const WatchedMovie = ({movies, changeStatus}) => (
  <div className="container">
    <h4>Watched</h4>
    <br/>
    <div className="row">
      {
        movies.map((movie,key) => {
          return <MovieCard key={key} changeStatus={changeStatus} movie={movie} />
        })
      }
    </div>
  </div>
)

export default WatchedMovie
