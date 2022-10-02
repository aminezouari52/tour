import React from "react"
import Button from "react-bootstrap/Button"
import { useRef } from "react"
import Form from "react-bootstrap/Form"

const AddNewTour = (props) => {
  const nameplace = useRef("")
  const price = useRef("")
  const description = useRef("")
  const poster = useRef("")

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (
      nameplace.current.value === "" ||
      price.current.value === "" ||
      description.current.value === ""
    ) {
      alert("!!! Ils faut Remplir tous les caces")
    } else
      props.onAddTours({
        nameplace: nameplace.current.value,
        price: price.current.value,
        description: description.current.value,
        poster: poster.current.value,
      })
  }

  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="nameplace">
          <Form.Label>Name PLace</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            autoFocus
            ref={nameplace}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Info">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="description"
            placeholder="Enter the description about the Place"
            autoFocus
            ref={description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>image</Form.Label>
          <Form.Control
            type="poster"
            placeholder="Image"
            autoFocus
            ref={poster}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>price</Form.Label>
          <Form.Control
            type="price"
            placeholder="Price"
            autoFocus
            ref={price}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add new Tour
        </Button>
      </Form>
    </div>
  )
}

export default AddNewTour
