import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({myData}) => {
    const { name,imageUrl } = myData;
    // console.log(imageUrl);
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to </p>
                    <h1>{name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation mollit anim id est laborum.
                    </p>
                    <NavLink to='/products'>
                        <Button>
                            Shop Now
                        </Button>
                    </NavLink>
                </div>

                {/* Hero section image */}
                <div className='hero-section-image'>
                    <figure>
                        <img src={imageUrl} alt='hero-section' className='img-style' />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      color: #067FD0;
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #223BC9;
      opacity: 1;
      position: absolute;
      left: 6%;
      top: -3rem;
      z-index: -1;
      border-radius: 20px;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 6rem -5rem 0.1rem 0.1rem  rgba(0, 50, 255, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    .img-style{
      box-shadow: none;
    }
    figure::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 3%;
      top: -2rem;
      /* bottom: 10%; */
      background-color: #223BC9;
    }
  }
`;

export default HeroSection;