import React, { useState, useEffect } from "react";
import './Card.css'

const Project = ({ img,name,url,description }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
    <div className={`scroll-div tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 card ${isScrolled ? "fade-from-left" : ""}`}>
      
      <a href={url} rel='dofollow' target={'_blank'}><img alt='robots' src={img} /></a>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
