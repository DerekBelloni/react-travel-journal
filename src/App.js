import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Data from "./Data";

const App = () => {
  const locationData = Data.map((data) => {
    return <Hero
      key={data.title}
      data={data}
    />
  })
  return (
    <>
      <Navbar />
      {locationData}
    </>
  )
}

export default App