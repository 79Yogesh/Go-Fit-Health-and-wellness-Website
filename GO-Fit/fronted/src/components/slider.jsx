import Carousel from 'react-bootstrap/Carousel';

import img3 from "./images/img2.jpg";
import img6 from "./images/img9.jpg";
import img4 from "./images/img8.jpg";
import img5 from "./images/card21.jpg";
import img1 from "./images/card17.jpg";
import img11 from "./images/img11.jpg";


export function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
          height="570px"
        />
        <Carousel.Caption >
          <h5>Workout</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption>
          <h5>Yoga</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="First slide"
          height="570px"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
          height="630px"
        />
        <Carousel.Caption>
          <h5>Gym</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          height="630px"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img11}
          alt="First slide"
          height="630px"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}


export default Slider;