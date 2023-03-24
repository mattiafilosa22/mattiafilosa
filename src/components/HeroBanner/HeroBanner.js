import React, { useState, useEffect } from "react";
import './HeroBanner.css';
import logo from '../../media/logo.png';


const HeroBanner = () => {
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
        <div id='an'>
            <div className="custom-shape-divider-top-1643020762">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='hero'>

                <div className='sub_hero'>
                    <img src={logo} alt='logo' className='logo' id='lmf'/>
                    <nav className="pa3 pa4-ns">
                        <a className="link dim gray b f6 f5-ns dib mr3" href="#1" title="Site" id='mf'>Mattia Filosa</a>
                        <a className="link dim gray    f6 f5-ns dib mr3" href="#skills" title="Skills">Skills</a>
                        <a className="link dim gray    f6 f5-ns dib mr3" href="#time_div" title="Career">My Career</a>
                        <a className="link dim gray    f6 f5-ns dib mr3" href="#portfolio_cont
                        " title="Portfolio">Portfolio</a>
                        <a className="link dim gray    f6 f5-ns dib mr3" href="#contact
                        " title="Portfolio">Contact</a>
                    </nav>
                </div>

                <div id="int">
                    <header className="tc ph4">
                        <h1 className="f3 f2-m f1-l fw2 black-90 mv3 bold-f">
                            I'M MATTIA FILOSA.
                        </h1>
                        <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                            WEB DEVELOPER
                        </h2>
                    </header>
                    
                </div>

                <div id='buffer_btn'></div>

                <div id='btn_div'>
                    <a className="button bg-filosa" href="#skills">See more</a>
                </div>



            </div>

        </div>
    );
}

export default HeroBanner;