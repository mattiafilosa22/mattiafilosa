import React from 'react';
import './Skills.css';
import '../../App.css';

const Skills = () => {
    return (
        <div id='skills_cont'>
            <div className='circle' id='c1'></div>
            {/* <div className='circle' id='c2'></div> */}
            <div className='container' id='skills'>
                <h1>Skills</h1>
                <p>HTML5 - CSS3 - JS</p>
                <div className="container_small">
                    <div className="skill html">90%</div>
                </div>

                <p>NLTK (Python3)</p>
                <div className="container_small">
                    <div className="skill python">80%</div>
                </div>
                <p>ReactJS - Node.js</p>
                <div className="container_small">
                    <div className="skill react">60%</div>
                </div>

                <p>PHP</p>
                <div className="container_small">
                    <div className="skill xslt">50%</div>
                </div>

                <p>Asp.Net CORE</p>
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