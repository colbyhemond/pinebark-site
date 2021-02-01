import Head from "next/head"
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
      reviews
     } = attributes;
    return (
      <>
        <Layout home title={title}>
          <div className="container container-top d-flex flex-wrap my-5">
            <div className="col-12 col-md-7 align-self-center">
              <h1>Your dog's home away from home.</h1>
            </div>
            <div className=" col-12 col-md-5">
              <div className="col-12 d-flex justify-content-center">
                <div className="icon">
                  <div className="col-3">
                    <img src="./assets/icons/dog_house.svg"></img>
                  </div>
                  <div className="col-9">
                    <p className="icon-title">Boarding</p>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div className="icon">
                  <div className="col-3">
                    <img src="./assets/icons/bathtub.svg"></img>
                  </div>
                  <div className="col-9">
                    <p className="icon-title">Grooming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid container-primary">
            <div className="container">
              <div className="row-fluid">
                <div className="col mb-1">
                <h3 className="text-center">Look who recently came to visit!</h3>
                  <ImgRow img1="./assets/images/IMG_4096.jpg" img2="./assets/images/IMG_1728.jpg"
                    img3="./assets/images/IMG_5151.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid container-secondary">
            <div className="container">
              <div className="row-fluid">
                <div className="col">
                  <h3 className="text-center">Read some of our 5 paw reviews!</h3>
                  <div className="d-flex flex-column">
                    {reviews.map( review =>
                    <div className="review">
                      <p key={review.client}>"{review.quote}"</p>
                      <h6>- <strong>{review.client}</strong>{ (review.location ? `, ${review.location}` : ``)}</h6>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        
        <style type="text/css"> {
          `
          .icon {
            margin: 10px;
            border: 1px solid lightgrey;
            border-radius: 3%;
            width: 100%;
            height: auto;
            max-width: 300px;
            transition: box-shadow 0.2s, transform 0.2s;
            padding: 15px;
            display: flex;
          }

          .icon:hover {
            box-shadow: 0 0 15px lightgrey;
            transform: rotate(3deg);
            background-color: #eee
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
          }
          
          `
        }

        </style>
      </>
    )
  }
}