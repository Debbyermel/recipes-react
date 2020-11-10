import React from 'react';
import './App.css'

function Tweet({ name, message, likes }){
  return(
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <small>{likes}</small>

    </div>
  )
}

export default Tweet;