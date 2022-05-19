import React from 'react';
import { GrLocation } from 'react-icons/gr';

const Hero = (props) => {
  console.log(props)
  return (
    <>
      <div className="destination-container">
        <img className="destination-img" src={props.data.imageUrl} alt="" />
        <div className="destination-info">
          <span><GrLocation />{props.data.location}           <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank">View on Google Maps</a></span>
          <h1 className="destination-title">{props.data.title}</h1>
          <h3>{props.data.startDate} - {props.data.endDate} </h3>
          <p className="destination-description">{props.data.description}</p>
        </div>
      </div>

    </>
  )
}

export default Hero;