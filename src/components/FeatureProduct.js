import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../context/productcontext';
import Product from './Product';

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    
    if(isLoading){
        return <div
        className="page_loading"
        style={{
          fontSize: '3.2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span className="loading_text">Loading...</span>
      </div>
    }

    return (
        <Wrapper className='section'>
            <div className="container">
                <div className="intro-data">Check Now!</div>
                <div className="common-heading">Our Feature Services</div>
                <div className="grid grid-three-column">
                    {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    ${'' /* overflow: hidden; */}
    transition: all 0.1s linear;
    ${'' /* &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.2s linear;
      cursor: pointer;
    } */}
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.05);
    }
    img {
      max-width: 100%;
      margin-top: 2rem;
      height: 20rem;
      transition: all 0.2s linear;
      border-radius: 1rem;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 0.5rem;
    }
  }

  .card {
    background-color: rgba(255,255,255,1);
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px 0px;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 0rem 0;
      padding-bottom: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    hr {
        margin: 2rem 0;
        color: rgba(0, 0, 0, 0.0);
        opacity: 0.04;
        border: 1px solid black;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default FeatureProduct;