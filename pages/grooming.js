import Head from "next/head"
import Link from "next/link"
import { Component } from 'react'
import { attributes, react as GroomingContent } from '../content/grooming.md';
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import ImgRow from '../components/ImgRow'


export default class Home extends Component {
  render() {
    let { 
      title,
      images, 
      faqCTA
    } = attributes;

    return (
      <>
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
                <GroomingContent />
            </div>
            <div className="row-fluid">
              <div className="col mb-1">
                <ImgRow images={images} />
              </div>
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
      </>
    )
  }
}