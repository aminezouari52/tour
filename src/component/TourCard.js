import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import tours from "../data/Data"
import TourDescription from "./TourDescription"
const TourCard = ({ nameplace, price, poster, description }) => {
  const HandleDelete = (i) => {
    tours.filter((el, index) => index !== i)
    console.log(i)
  }
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poster} alt="" />
        <Card.Body>
          <Card.Title> {nameplace} </Card.Title>
          <Card.Title> {price} </Card.Title>
          <Card.Text>
            <TourDescription description={description} />
          </Card.Text>
          <Button variant="warning" onClick={() => HandleDelete()}>
            not Interested
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
export default TourCard
