import React from "react"
import Carousel from "react-bootstrap/Carousel"
import "./Home.css"
const Home = () => {
  return (
    <div className="home">
      {" "}
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Welcome TO our Web-Site</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static01.nyt.com/images/2019/12/29/travel/29TRIPPEDUP-points/29TRIPPEDUP-points-superJumbo.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5> Welcome</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2012/05/20172622/ce-travel.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Bienvenue sur notre Site-Web</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Home
