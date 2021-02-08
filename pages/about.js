import Head from "next/head"
import Link from "next/link"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Layout from '../components/Layout'


export default class Home extends Component {
  render() {
    let { 
      title, 
      servicesCTA
    } = attributes;
    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
                  <AboutContent/>
            </div>
          </div>
          <div className="container-fluid container-secondary">
              <div className="container">
                <div className="row-fluid">
                  <div className="col text-center">
                    <h3>{servicesCTA}</h3>
                    <Link href="/boarding">
                      <button className="btn btn-secondary">Boarding</button>
                    </Link>
                    <Link href="/grooming">
                      <button className="btn btn-secondary">Grooming</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </Layout>
      </>
    )
  }
}