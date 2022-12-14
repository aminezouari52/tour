import React from 'react'
import tours from '../data/Data'
import TourCard from './TourCard'

const TourList = (props) => {
  return (
    <div>
      {props.tours.map((el, i) => (
        <TourCard
          key={el.id}
          nameplace={el.nameplace}
          price={el.price}
          poster={el.poster}
          description={el.description}
        />
      ))}
    </div>
  )
}
export default TourList
