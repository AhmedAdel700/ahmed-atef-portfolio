import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Footer />
    </>
  );
}
