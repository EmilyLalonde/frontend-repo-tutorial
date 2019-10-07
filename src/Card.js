import React from 'react';

const Card = ({ id, name, weather }) => {
  return (
    <div>
    <p>{ id }</p>
    <p>{ name }</p>
    <p>{ weather}</p>
    </div>
  )
}

export default Card