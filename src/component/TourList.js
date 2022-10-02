import React from "react"
import tours from "../data/Data"
import TourCard from "./TourCard"

const TourList = () => {
  return (
    <div>
      {tours.map((el, i) => (
        <TourCard
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
