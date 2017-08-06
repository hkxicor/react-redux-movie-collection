import React from 'react'
import DefaultMovieImage from '../assets/default.png'
import './index.css'

const ImageComponentSmall = ({link, like, changeStatus, Title}) => {
  function likeMovie() {
    console.log(typeof(changeStatus));
    changeStatus('up', Title)
  }
  function dislikeMovie() {
    changeStatus('down', Title)
  }
  return (
  <div className="img_container">
    <img className="small-img" src={
        link && link !== 'N/A'  ? link : DefaultMovieImage
    } alt="" />
    {
     like === 'up' && <span className="glyphicon glyphicon-thumbs-up status"></span>
    }
    {
      like === 'down' && <span className="glyphicon glyphicon-thumbs-down status"></span>
    }
    <button onClick={likeMovie} className="btn btn-md btn-circle like">
      <span className="glyphicon glyphicon-thumbs-up"></span>
    </button>
    <button onClick={dislikeMovie} className="btn btn-md btn-circle dislike">
      <span className="glyphicon glyphicon-thumbs-down"></span>
    </button>
  </div>)
}

export default ImageComponentSmall
