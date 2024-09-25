import { useEffect, useState } from "react";
import img1 from "../images/3.jpeg";
import img2 from "../images/4.jpeg";
import img3 from "../images/5.jpeg";
import { Box } from "@mui/material";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image

  const images = [
    { pic: img1, text: "Swimming Pool" },
    { pic: img2, text: "Glass Pergola" },
    { pic: img3, text: "Glass Facade" },
  ];

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

  const renderedImages = images.map((e, index) => {
    return (
      <Box className="item" key={index} onClick={() => handleClick(e.pic)}>
        <img src={e.pic} alt={"Image Of A Site"} />
        <h4>{e.text}</h4>
      </Box>
    );
  });

  return (
    <section id="projects">
      <h2>Previous Projects</h2>

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
