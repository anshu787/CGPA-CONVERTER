import React from 'react';
import {useState} from 'react'
import './Home.css';
import Navbar from '../Navbar/Navbar';

const Home = () => {
 

  const [cgpa, setCGPA] = useState('');

  const [percentage, setPercentage] = useState('');

  const handleCGPAChange = (event) => {
    setCGPA(event.target.value);

    const scaledPercentage = (parseFloat(event.target.value)) * 9.5;
    setPercentage(scaledPercentage.toFixed(2));

  };


  const handlePercentageChange = (event) =>{
    setPercentage(event.target.value);
    const scaledCGPA = (parseFloat(event.target.value) / 9.5)  ;
    setCGPA(scaledCGPA.toFixed(2));

  };

  return (
    <>
      <Navbar />
      <main>
        <div className='home-page'>
        <div className='text-desc'>
          <h1 className='text-tit'>
            Welcome to CGPA Conversion
          </h1>
        </div>
        <div className='item-at-right'>
          <div className='right-opacities'>
            <div className='cgpa'>
            CPGA: <input type='number' value={cgpa} onChange={handleCGPAChange} min={0} max={10} step={0.1}></input>
            
            <br/>
            Percentage:<input type='number' value={percentage} onChange={handlePercentageChange} min={0} max={100} step={0.1}></input></div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
