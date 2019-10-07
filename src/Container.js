import React from 'react';
import Card from './Card'

const Container = ({ seasons }) => {
  const seasonsInfo = seasons.map(season => {
    return (
      <Card 
      id= {season.id}
      name= {season.name}
      weather= {season.weather}
      />
    )
  })
  return (
    <div>
      {seasonsInfo}
    </div>
  )
}

export default Container