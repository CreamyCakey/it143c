import React from 'react';
import dabid from './../../assets/images/dabid.png';

function AboutMe() {
  return (
    <div className="aboutme">
      <div className="aboutme-container">
        <div className="aboutme-img-content">
          <img src={dabid} alt="Dave"/>
        </div>
      </div>
      <div className="aboutme-content">
        <h1>Hi I'm <span className='name'> Dave</span> Lamoste</h1>
        <h3>Hey there! I'm an energetic and passionate individual who loves bringing positivity and 
          creativity into everything I do. With a warm personality and a fun-loving spirit, 
          I thrive on connecting with people, embracing new experiences, and making every moment exciting.
        </h3>
      </div>
      
    </div>
  );
}

export default AboutMe;