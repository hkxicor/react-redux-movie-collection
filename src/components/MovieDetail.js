import React from 'react'
import './index.css'
import ImageComponent from './ImageComponent'

const MovieDetail = ({ movie, makeWatched, watched }) => (
    <div className="container overlapfix">
    <div className="row">
      <div className="col-md-3">
        <ImageComponent link={movie.Poster} />
      </div>
      <div className="col-md-9">
        <div className="container">
          <h4>{movie.Title}</h4>
          <p>{movie.Released}</p>
          <div className="row">
            {
              movie.Ratings &&
              movie.Ratings.map((item,key) => (
                <div key={key} className="col-md-2">
                  <h5>{item.Value}</h5>
                  <p>{item.Source}</p>
                </div>
              ))
            }
            <div className="col-md-2">
               <button type="button" disabled={watched} onClick={ () => { makeWatched(movie) }} className="btn btn-lg btn-default colorfix">Watched</button>
            </div>
          </div>
          <br/>
          <h5>Plot</h5>
          <div className="word-wrap">{movie.Description}</div>
        </div>
      </div>
    </div>
  </div>
)

export default MovieDetail
