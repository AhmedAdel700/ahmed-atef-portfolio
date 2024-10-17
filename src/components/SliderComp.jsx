import Slider from "react-slick";
import pic1 from "../images/1.jpeg";
import pic2 from "../images/2.jpeg";
import pic3 from "../images/3.jpeg";
import pic4 from "../images/4.jpeg";
import pic5 from "../images/5.jpeg";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SliderComp({ slider, img }) {
  const projects = [pic1, pic2, pic3, pic4, pic5];

  const renderProjects = projects.map((project, index) => (
    <div className="box" key={index} onClick={() => img(project)}>
      <img src={project} alt={`Project ${index + 1}`} />
    </div>
  ));

  const settings = {
    className: "center",
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider ref={slider} {...settings}>
        {renderProjects}
      </Slider>
    </div>
  );
}

export default SliderComp;
