import Head from "next/head"
import Link from "next/link"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/faq.md';
import Layout from '../components/Layout'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

let eventKey = 1;
function incrementKey() {
  eventKey++;
  return
}

export default class Home extends Component {
  
  render() {
    let { 
      title,
      faqs,
      contactCTA
    } = attributes;
    
    return (
      <>
        <Layout title={title}>
          <div className="container body">
            <h1>{title}</h1>
            <Accordion defaultActiveKey="1">
              {faqs.map( faq =>
              <Card key={faq.question}>
                <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                  {faq.question}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKey}>
                  <Card.Body><ReactMarkdown plugins={[gfm]} children={faq.answer}/></Card.Body>
                </Accordion.Collapse>
              {incrementKey()}
              </Card>
              )}
             
            </Accordion>
            
          </div>

          <div className="container-fluid container-secondary">
            <div className="container">
              <div className="row-fluid">
                <div className="col text-center">
                  <h3>{contactCTA}</h3>
                  <Link href="/contact">
                  <button className="btn btn-secondary">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      

        <style type="text/css"> {
          `
          .container {
            max-width: 700px;
          }

          .card-header {
            font-weight: bold;
            font-family: var(--font-primary), serif;
            color: var(--white-ch);
            background-color: var(--green-ch);
            // background-color: white;
            border-bottom: 3px solid var(--white-ch);

          }

          .card-header:hover {
            // border-bottom: 3px solid var(--white-ch);
            border-left: 15px solid var(--white-ch);
            transform: scale(1.01);
          }

          .card {
            color: var(--black-ch);
            border: none;
            background-color: rgb(0,0,0,0);
    
          }

          .card-body {
            background-color: var(--white-ch);
            color: var(--black-ch);
            // box-shadow: 0 5px 20px var(--black-ch) inset;
            font-family: 'Raleway', sans-serif;
            
          }
          
          `
        }

        </style>
      </>
    )
  }
}