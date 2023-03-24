import React, { useState, useEffect } from "react";
import './Skills.css';
import '../../App.css';

const Skills = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [loadedHtml, setLoadedHtml] = useState(0);
    const [loadedJS, setLoadedJS] = useState(0);
    const [loadedPython, setLoadedPython] = useState(0);
    const [loadedCSharp, setLoadedCSharp] = useState(0);
    const totalHtml = 90;
    const totalJS = 80;
    const totalPython = 70;
    const totalCSharp = 60;
    const timing = 30;
    const increasing = 5;

    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 10) {
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

    useEffect(() => {
        if(!isScrolled) return;

        const interval = setInterval(() => {
            setLoadedHtml((prevLoaded) => {
            if (prevLoaded === totalHtml) {
              clearInterval(interval);
              return prevLoaded;
            }
            return prevLoaded + increasing;
          });
        }, timing);
    
        return () => {
          clearInterval(interval);
        };
    }, [totalHtml, isScrolled]);

    useEffect(() => {
        if(!isScrolled) return;

        const interval = setInterval(() => {
            setLoadedJS((prevLoaded) => {
            if (prevLoaded === totalJS) {
              clearInterval(interval);
              return prevLoaded;
            }
            return prevLoaded + increasing;
          });
        }, timing);
    
        return () => {
          clearInterval(interval);
        };
    }, [totalJS, isScrolled]);

    useEffect(() => {
        if(!isScrolled) return;

        const interval = setInterval(() => {
            setLoadedPython((prevLoaded) => {
            if (prevLoaded === totalPython) {
              clearInterval(interval);
              return prevLoaded;
            }
            return prevLoaded + increasing;
          });
        }, timing);
    
        return () => {
          clearInterval(interval);
        };
    }, [totalPython, isScrolled]);

    useEffect(() => {
        if(!isScrolled) return;
        const interval = setInterval(() => {
            setLoadedCSharp((prevLoaded) => {
            if (prevLoaded === totalCSharp) {
              clearInterval(interval);
              return prevLoaded;
            }
            return prevLoaded + increasing;
          });
        }, timing);
    
        return () => {
          clearInterval(interval);
        };
    }, [totalCSharp, isScrolled]);
    
    const percentLoadedHtml = isScrolled && Math.round((loadedHtml / totalHtml) * 90);
    const percentLoadedJS = isScrolled && Math.round((loadedJS / totalJS) * 80);
    const percentLoadedPython = isScrolled && Math.round((loadedPython / totalPython) * 70);
    const percentLoadedCSharp = isScrolled && Math.round((loadedCSharp / totalCSharp) * 60);

    return (
        <div id='skills_cont' className={`scroll-div ${isScrolled ? "active-animation" : ""}`}>
            <div className='circle' id='c1'></div>
            <div className='container' id='skills'>
                <h1>Skills</h1>
                <p>HTML5 - SASS</p>
                <div className="container_small">
                    <div className="skill html" id="html">{percentLoadedHtml}%</div>
                </div>

                <p>JS (React - jQuery)</p>
                <div className="container_small">
                    <div className="skill python" id="js">{percentLoadedJS}%</div>
                </div>

                <p>PHP 8.0</p>
                <div className="container_small">
                    <div className="skill react" id="php">{percentLoadedPython}%</div>
                </div>

                <p>Python 3</p>
                <div className="container_small">
                    <div className="skill xslt" id="python">{percentLoadedPython}%</div>
                </div>

                <p>C - C#</p>
                <div className="container_small">
                    <div className="skill asp" id="csharp">{percentLoadedCSharp}%</div>
                </div>
                <div id='buffer'></div>

            </div>
            <div className='triangle' id='t1'></div>
        </div>
    );
}

export default Skills;