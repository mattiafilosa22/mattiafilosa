import React, { useState, useEffect } from "react";
import './Skills.css';
import '../../App.css';

const Skills = () => {
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
        <div id='skills_cont' className={`scroll-div ${isScrolled ? "fade-from-left" : ""}`}>
            <div className='circle' id='c1'></div>
            {/* <div className='circle' id='c2'></div> */}
            <div className='container' id='skills'>
                <h1>Skills</h1>
                <p>HTML5 - SASS</p>
                <div className="container_small">
                    <div className="skill html">90%</div>
                </div>

                <p>JS (React - jQuery)</p>
                <div className="container_small">
                    <div className="skill python">80%</div>
                </div>

                <p>PHP 8.0</p>
                <div className="container_small">
                    <div className="skill react">70%</div>
                </div>

                <p>Python 3</p>
                <div className="container_small">
                    <div className="skill xslt">50%</div>
                </div>

                <p>C - C#</p>
                <div className="container_small">
                    <div className="skill asp">40%</div>
                </div>
                <div id='buffer'></div>

                {/* <a
                    className="button workButton" id='down_button'
                    href="../../media/cv_mattia_filosa.pdf"
                    download
                >
                    Download my CV
                </a> */}
            </div>
            <div className='triangle' id='t1'></div>
            {/* <div className='circle' id='c4'></div> */}
        </div>


    );
}

export default Skills;