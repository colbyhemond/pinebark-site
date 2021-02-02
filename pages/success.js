import Head from "next/head"
import Link from "next/link"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Layout from '../components/Layout'


export default class Home extends Component {
  render() {
    let { 
      title, 
      employees
    } = attributes;
    return (
      <>

        <div class="main">
            <div class="card">
                <div class="header">
                    <h1>Thank you!</h1>
                </div>
                <div class="body">

                    <p>Your form submission has been received.</p>

                    <p>
                        <a id="back-link" href="https://ch-pinebark.netlify.app/contact">← Back to our site</a>
                    </p>
                </div>
            </div>
        </div>

        <style type="text/css"> {
          `

          .main {
            height: 100vh;
            // background-color: lightgrey;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .card {
            border: none;
            padding: 20px;
            background-color: var(--green-ch);
            box-shadow: 0 0 5px grey;
            color: var(--white-ch);
          }

          #back-link {
            font-size: 16pt;
          }
          
          `
        }

        </style>
      </>
    )
  }
}