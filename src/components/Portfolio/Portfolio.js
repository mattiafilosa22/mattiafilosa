import React from 'react';
import './Portfolio.css';
import projectsElements from '../../data/projects';
import brain from '../../media/brain-2750415_960_720.png';
import bellini from '../../media/bellini.png';
import { FaGithub } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

import { FaLinkedin } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div id='portfolio_cont'>
            <h1 className='title'>Portfolio</h1>
            <div id='proj_container'>
                {projectsElements.map(element => {
                    let icon = 'https://robohash.org/2?size=200x200';
                    let id = element.id;
                    if (element.logo === 'brain') {
                        icon = brain;
                    } else if (element.logo === 'bellini') {
                        icon = bellini;
                    }
                    return (<div className='proj_element'>

                        <div key={element.key}>

                            <img src={icon} alt='logo' />

                            <p><h1>{element.title}</h1>
                                <h5>{element.framework}</h5>
                                {element.description}<br /><br />
                                <a href={element.url} className='button' target="_blank">View the project</a></p>

                        </div>

                    </div>
                    )
                })}
            </div>
            <div id='contact'>
                <SocialIcon url="https://www.linkedin.com/in/mattia-filosa/" />
                <div class='icon_buffer' />
                <SocialIcon url="https://github.com/mattiafilosa22" />
                <div class='icon_buffer' />
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
