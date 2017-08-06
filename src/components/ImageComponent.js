import React from 'react'
import DefaultMovieImage from '../assets/default.png'

const ImageComponent = ({link}) => (
  <a href="#" className="thumbnail">
    <img  src={
        link && link !== 'N/A'  ? link : DefaultMovieImage
    } alt="" />
  </a>
)

export default ImageComponent
