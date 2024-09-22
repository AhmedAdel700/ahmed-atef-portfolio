import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export default function Header() {
  const smallScreen = useMediaQuery("(max-width:767px)");
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // State to track active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link on click
    setIsActive(false); // Close the menu if on small screens
  };

  return (
    <header>
      {smallScreen && (
        <MenuIcon
          onClick={() => setIsActive((prev) => !prev)}
          sx={{
            color: "white",
            fontSize: "2rem",
            mr: "0.5rem",
            cursor: "pointer",
          }}
        />
      )}
      <div className="logo">Eng: Ahmed Atef</div>
      <nav className={isActive ? "active" : ""}>
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          style={{
            color: activeLink === "#home" ? "rgb(190, 20, 20)" : "white",
          }}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handleLinkClick("#projects")}
          style={{
            color: activeLink === "#projects" ? "rgb(190, 20, 20)" : "white",
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick("#contact")}
          style={{
            color: activeLink === "#contact" ? "rgb(190, 20, 20)" : "white",
          }}
        >
          Contact Me
        </a>
      </nav>
      <div></div>
    </header>
  );
}
