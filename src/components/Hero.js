import React from 'react';


const Hero = (props) => {
  console.log(props)
  return (
    <>
      <div className="destination-container">
        <img className="destination-img" src={props.data.imageUrl} alt="" />
        <h1 className="destination-title">{props.data.title}</h1>
      </div>
      <h1>hello</h1>
    </>
  )
}

export default Hero;