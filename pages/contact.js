import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/contact.md';
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

export default class Home extends Component {
  render() {
    let { title } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{title}</h1>
            <div className="body d-flex justify-content-center">
              <ContactForm />
            </div>
            
          </div>
        </Layout>
      

        <style type="text/css"> {
          ` 
          
          
          
          `
        }

        </style>
      </>
    )
  }
}