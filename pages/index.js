import Head from "next/head"
import Link from "next/link"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/Layout'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import ImgRow from '../components/ImgRow'

import navButtons from "../config/buttons";

export default class Home extends Component {
  
  render() {
    
    let { 
      title,
      tagline,
      imagesHeading,
      images,
      reviewsHeading,
      reviews,
      aboutCTA
     } = attributes;
    return (
      <>
        <Layout home title={title}>
          <div className="container container-top d-flex flex-wrap my-5">
            <div className="col-12 col-md-7 align-self-center d-flex justify-content-center">
              {/* <h1>Your dog's home away from home.</h1> */}
              <h1>{tagline}</h1>
              
            </div>
            <div className=" col-12 col-md-5">
              <div className="col-12 d-flex justify-content-center">
                <Link href="/boarding">
                  <a className="no-dec">
                  <div className="icon">
                    <div className="col-3">
                      <img src="./assets/icons/dog_house.svg"></img>
                    </div>
                    <div className="col-9" >
                      <div className="icon-title">Boarding »</div>
                      
                    </div>
                  </div>
                </a>
                </Link>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <Link href="/grooming">
                <a className="no-dec">
                  <div className="icon">
                    <div className="col-3">
                      <img src="./assets/icons/bathtub.svg"></img>
                    </div>
                    <div className="col-9">
                      <div className="icon-title">Grooming »</div>
                    </div>
                  </div>
                </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container-fluid container-primary">
            <div className="container">
              <div className="row">
                <HomeContent/>
              </div>
              <div className="row-fluid">
                <div className="col mb-1">
                  <h3 className="text-center">{imagesHeading}</h3>
                  <ImgRow images={images} />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid container-secondary">
            <div className="container">
              <div className="row-fluid">
                <div className="col">
                  <h3 className="text-center">{reviewsHeading}</h3>
                  <div className="d-flex flex-column">
                    {reviews.map( review =>
                    <div className="review" key={review.client}>
                      <p>"{review.quote}"</p>
                      <h6>- <strong>{review.client}</strong>{ (review.location ? `, ${review.location}` : ``)}</h6>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid container-secondary">
          <div className="container">
              <div className="row-fluid">
                <div className="col text-center">
                    <h2>{aboutCTA}</h2>
                  <Link href="/about">
                    <button className="btn btn-secondary">About Us</button>
                  </Link>
                  </div>
                  </div>
                  </div>
          </div>
        </Layout>

        
        <style type="text/css"> {
          `
          a .icon {
            margin: 10px;
            border: 3px solid var(--white-ch);
            border-radius: 5px;
            background-color: var(--green-ch);
            color: white;
            width: 250px;
            height: auto;
            max-width: 300px;
            transition: box-shadow 0.2s, transform 0.2s;
            padding: 15px 5px;
            display: flex;
            box-shadow: 0 0 5px grey;
            
          }

          a .icon:hover {
            box-shadow: 0 0 15px grey;
            text-decoration-line: underline;
            text-decoration-color: white;
            transform: rotate(3deg);
          }

          .icon img {
            width: 100%;
            min-width: 30px;
          }

          .icon .icon-title {
            text-align: left;
            width: 100%;
            margin: auto 0 auto 0;
            font-size: 18pt;
            font-family: var(--font-primary), serif;
          }

          .review {
            margin: 40px 0 0 0;
            border-left: 5px solid var(--green-ch);
            padding-left: 15px;
          }

          .no-dec {
            text-decoration: none;
          }
          
          `
        }

        </style>
      </>
    )
  }
}