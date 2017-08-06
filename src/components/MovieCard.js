import React from 'react'
import ImageComponentSmall from './ImageComponentSmall'

const MovieCard = ({movie, changeStatus}) => (
  <div className="col-xs-6 col-md-2">
    <div className="thumbnail">
      <ImageComponentSmall link={movie.Poster} Title={movie.Title} changeStatus={changeStatus} like={movie.like} />
    </div>
  </div>
)

export default MovieCard
