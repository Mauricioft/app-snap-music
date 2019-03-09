import React from 'react'

const Media = (props) => {
  const images = (props.images.length > 0 && props.images[1].url !== 'undefined') ? props.images[1].url : ''
  return (
    <div className="Media">
      <h1 className="Media-title">{props.name}</h1><br/>
      <img
        className="Media-image"
        src={images}
        alt={props.name}
        title={props.name}
        width="320"
        height="320"
      />
      <p className="Media-Description">{props.genres.join(' - ')}</p>
      <p className="Media-title">Popularidad {props.popularity}</p>
    </div>
  )
}

export default Media