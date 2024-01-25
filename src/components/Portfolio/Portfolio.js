import React, { useEffect, useRef, useState } from "react";
import './Portfolio.css';
import projectsElements from '../../data/projects';
import brain from '../../media/brain-2750415_960_720.png';
import bellini from '../../media/bellini.png';
import { SocialIcon } from 'react-social-icons';

const Portfolio = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const portfolioRef = useRef();

    const uniqueId = () => {
        let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        let id = '';
        for(let i = 0; i < 10; i++) {
            let index = Math.round(Math.random() * (chars.length - 1));
            id += chars[index];
        }
        return id;
    };

    useEffect(() => {
        function handleScroll() {
            const rect = portfolioRef.current.getBoundingClientRect();
            const isNearViewport = rect.top < window.innerHeight && rect.bottom >= 0;
            setIsScrolled(isNearViewport);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={portfolioRef} id='portfolio_cont' className={`portfolio-cont ${isScrolled && "portfolio-animation"}`}>
            <h1 className='title'>Portfolio</h1>
            <div id='proj_container'>
                {projectsElements.map(element => {
                    let icon = 'https://robohash.org/2?size=200x200';
                    if (element.logo === 'brain') {
                        icon = brain;
                    } else if (element.logo === 'bellini') {
                        icon = bellini;
                    }
                    return (<div className='proj_element'  key={`${uniqueId()}-${element.key}`}>

                        <div key={`${uniqueId()}-${element.key}`}>

                            <img src={icon} alt='logo' />

                            <span><h1>{element.title}</h1>
                                <h5>{element.framework}</h5>
                                {element.description}<br /><br />

                                {element.url && ( <a href={element.url} className='button' target="_blank" rel="noreferrer">View the project</a>)}
                            </span>
                        </div>

                    </div>
                    )
                })}
            </div>
            <div id='contact'>
                <SocialIcon url="https://www.linkedin.com/in/mattia-filosa/" />
                <div className='icon_buffer' />
                <SocialIcon url="https://github.com/mattiafilosa22" />
                <div className='icon_buffer' />
                <SocialIcon url="mailto:mattiafilosadev@gmail.com" />
            </div>
            <div className="custom-shape-divider-bottom-1643030209">

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>

            </div>

        </div>

    );
}

export default Portfolio;
