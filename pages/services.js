import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ServicesContent } from '../content/services.md';
import Layout from '../components/Layout'


export default class Home extends Component {
  render() {
    let { 
      title, 
      services
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
                {/* {services.map( service => 
                  <div key={service.service} className="row">
                    <div className='col d-flex  align-self-center justify-content-end'>
                      <h2 key={service.service} className="">{service.service}</h2>
                     
                    </div>
                    <h1>\</h1>
                    <div className='col d-flex align-self-center'>
                      <h4 key={service.service}>{service.price}</h4>
                    </div>
             
                  </div>
             
                    
           
                )} */}
                <ServicesContent />
            </div>
           
          </div>
        </Layout>
        

        <style type="text/css"> {
          ` 

          .container {
            max-width: 700px;
          }

          
          
          `
        }

        </style>
      </>
    )
  }
}