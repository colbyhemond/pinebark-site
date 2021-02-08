import Head from "next/head"
import Link from "next/link"
import { Component } from 'react'
import { attributes, react as BoardingContent } from '../content/boarding.md';
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


export default class Home extends Component {
  render() {
    let { 
      title, 
      faqCTA
    } = attributes;

    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            
            <div className="body">
                {/* <div className="row"> */}
                <div className="text">
                    <BoardingContent />
               </div>
                {/* <div className="col-12 col-md-4"> */}
                    <div className="image">
                        <img  src="./assets/images/IMG_4461.jpg"></img>
                    </div>
                {/* </div> */}
                {/* </div> */}
            </div>
            
            <div className="container-fluid container-secondary">
              <div className="container">
                <div className="row-fluid">
                  <div className="col text-center">
                    <h3>{faqCTA}</h3>
                    <Link href="/faq">
                      <button className="btn">FAQ</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </Layout>
        <style type="text/css">
            {`

            
            
            .text {
                float: left;
            }

            .image {
                width: 50%;
            }

            .image img {
                height: auto;
                width: 100%;
                // margin-top: 80%;
                // float: right;
            }
            
            `}
        </style>
      </>
    )
  }
}