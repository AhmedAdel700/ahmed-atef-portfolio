import { useEffect, useState, useRef } from "react";

import img1 from "../images/3.jpeg";
import img2 from "../images/4.jpeg";
import img3 from "../images/5.jpeg";
import { Box, Button } from "@mui/material";

import SliderComp from "./SliderComp";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image
  const slider = useRef(null);

  const handleClick = (img) => {
    setSelectedImage(img); // Set the clicked image as selected
  };

  const handleClose = () => {
    setSelectedImage(null); // Close the modal
  };

  // Close modal on Esc key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section id="projects" data-aos='fade-up'>
      <h2>Previous Projects</h2>

      {/* <div className="work">{renderedImages}</div> */}

      {/* Conditionally render modal if an image is selected */}
      {selectedImage && (
        <Box className="modal">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <img
            className="modal-content"
            src={selectedImage}
            alt="Enlarged view"
          />
        </Box>
      )}
      <Button
        sx={{ backgroundColor: "#000", margin: "1rem",width:"130px",height:"40px" }}
        variant="contained"
        onClick={() => slider.current.slickPrev()}
      >
        Prev
      </Button>
      <Button
        sx={{ backgroundColor: "#000", margin: "1rem",width:"130px",height:"40px" }}
        variant="contained"
        onClick={() => slider.current.slickNext()}
      >
        Next
      </Button>
      <SliderComp slider={slider} img={handleClick} />
    </section>
  );
}
