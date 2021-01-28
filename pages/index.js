import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../components/Layout'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import navButtons from "../config/buttons";

export default class Home extends Component {
  
  render() {
    
    let { 
      title, 
      jumbotron, jumboText1, jumboText2,
      card1Img, card1Title, card1Text, card1ButtonText, buttonLink1, 
      card2Img, card2Title, card2Text, card2ButtonText, buttonLink2,
      card3Img, card3Title, card3Text, card3ButtonText, buttonLink3
     } = attributes;
    return (
      <>
        <Layout home title={title}>
          <div className="jumbotron fluid test">
            <div className='jumbotron-content'>
              <div className="container-fluid center">
              <img className="logo" src=""></img>
              <h1>{ jumboText1 }</h1>
              <p>{ jumboText2 }</p>
              </div>
              
            </div>
          </div>
          

        </Layout>

        
        <style type="text/css"> {
          `
          .jumbotron {
            color: white;
            // background-image: url('${jumbotron}');
            
            
            // background-color: #DDD !important;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 5em;
            
            // filter: grayscale(100%);
          }

          .jumbotron {
            // filter: grayscale(100%);
          }
          
          .card {
            margin: 20px;
          }

          .logo {
            margin-bottom: 50px;
            filter: drop-shadow(0px 0px 8px #121);
            max-width: 85%;
          }

          

         
          
          `
        }

        </style>
      </>
    )
  }
}