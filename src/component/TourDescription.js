import React from "react"
import ReadMoreReact from "read-more-react"

const TourDescription = ({ description }) => {
  return (
    <div>
      <ReadMoreReact text={description} />
    </div>
  )
}
export default TourDescription
