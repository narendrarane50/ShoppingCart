import React from "react";
import { Carousel,Button } from "react-bootstrap";
import '../style/index.css';
import bannerimg from "../images/banner1.jpg";

const carouselData=[
    {},{},{}
]

function HomeCarousel() {
  return (
    <div>
      <Carousel fade>
        {
            carouselData.map(()=>(
                <Carousel.Item>
                <img  className="d-block w-100"  style={{ height: "95vh" }}  src={bannerimg}  alt="First slide"/>
                <Carousel.Caption>
                  <h3 className='heading'>Fashion for Upcoming Winter</h3>
                  <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p className="sub-heading">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  <Button className="collection-btn">View Collections</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))
        }
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
