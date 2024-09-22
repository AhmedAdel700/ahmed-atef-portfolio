import { useState } from "react";
import img1 from "../images/5.jpeg";
import img2 from "../images/4.jpeg";
import img3 from "../images/1.jpeg";
import img4 from "../images/3.jpeg";
import img5 from "../images/3.jpeg";
import img6 from "../images/3.jpeg";
import img7 from "../images/3.jpeg";
import { Box } from "@mui/material";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image

  const images = [img1, img2, img3, img4, img5, img6, img7];

  const handleClick = (img) => {
    setSelectedImage(img); // Set the clicked image as selected
  };

  const handleClose = () => {
    setSelectedImage(null); // Close the modal
  };

  const renderedImages = images.map((img, index) => {
    return (
      <Box className="item" key={index} onClick={() => handleClick(img)}>
        <img src={img} alt={"Image Of A Site"} />
        <h4>This Is Priject {index + 1}</h4>
      </Box>
    );
  });

  return (
    <section id="projects">
      <h2>Some Of My Projects</h2>

      <div className="work">{renderedImages}</div>

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
    </section>
  );
}
