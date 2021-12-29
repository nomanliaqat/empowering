import React from "react";
import { Carousel } from "react-bootstrap";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = () => {
  const sliderImg = [
    {
      src: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/Secondary-School-Workshop-Picture.png",
    },
    {
      src: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/slider-1.jpg",
    },
    {
      src: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/slider-4.jpg",
    },
    {
      src: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/03/slider-6.jpg",
    },
    {
      src: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/02/slider1.jpg",
    },
    {
      src: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/02/slider2.jpg",
    },
    {
      src: "https://empoweringconfidentyouth.com/wp-content/uploads/2020/02/slider4.jpg",
    },
  ];
  return (
    <>
      <Carousel fade controls={false} indicators={false}>
        {sliderImg.map((img, i) => (
          <Carousel.Item key={i} interval={30000}>
            <img className="d-block w-100" src={img.src} alt="First slide" />
            <Carousel.Caption style={{ top: "50%", left: "20%", right: "20%" }}>
              <h1 className="slider_caption">
                Teaching Students to Grow into Confident and Successful Adults
              </h1>
              <p className="caption_detail">
                An Innovative Social-Emotional Learning and Leadership
                Development Program for Classrooms, After-School Programs,
                Summer School, and Young-Adult Community Programs
              </p>
              <button type="button" className="request_btn">
                <FontAwesomeIcon icon={faEdit} />
                <span style={{ marginLeft: 4 }}>Request Information</span>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="main-school">
        <div className="row">
          <div className="col offset-md-5 offset-lg-5">
            <a href="https://learning.empoweringconfidentyouth.com/elementary-school-sel-curriculum/">
              <button className="school-btn elementary-sch-btn w-100">
                Elementray School
              </button>
            </a>
          </div>
          <div className="col">
            <a href="https://learning.empoweringconfidentyouth.com/middle-school-sel-curriculum/">
              <button className="school-btn middle-sch-btn w-100">
                Middle School
              </button>
            </a>
          </div>
          <div className="col">
            <a href="https://learning.empoweringconfidentyouth.com/high-school-sel-curriculum/"></a>
            <button className="school-btn high-sch-btn w-100">
              High School
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
