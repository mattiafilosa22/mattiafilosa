import React from 'react';
import './Card.css'

const Project = ({ img,name,url,description }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 card'>
      
      <a href={url} rel='dofollow' target={'_blank'}><img alt='robots' src={img} /></a>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
