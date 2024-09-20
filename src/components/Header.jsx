import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export default function Header() {
  const smallScreen = useMediaQuery("(max-width:767px)");
  const [isActive, setIsActive] = useState(false);

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
        <a href="home">Home</a>
        <a href="projects">Projects</a>
        <a href="contact">Contact Me</a>
      </nav>
      <div></div>
    </header>
  );
}
