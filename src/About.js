import React from 'react';
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontext';

const About = () => {
  const {myName} = useProductContext();

  const data ={
    name: 'Digital Mart - A online electronics store',
    imageUrl:'/images/hero-about.png',
  };
  
  return (
    <>
    {myName}
    <HeroSection myData={data}/>{" "}
    </>
  )
}

export default About;