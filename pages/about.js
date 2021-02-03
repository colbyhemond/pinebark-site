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
        <Layout title={title}>
          <div className="container">
            <h1>{ title }</h1>
            <div className="body">
                {/* { employees.map( employee => 
                  <div key={employee.name} className="row employeeRow">
                    <div className='col-12 col-sm-5 employeeImg'>
                      <img key={employee.name} src={employee.image}></img>
                    </div>
                    <div className='col-12 col-sm-7'>
                      <h2 key={employee.name} className="">{employee.name}</h2>
                      <p key={employee.name}>{employee.title}</p>
                      <p key={employee.name}>{employee.about}</p>
                    </div>
                  </div>
                )} */}
                <p>
                  Pine Bark opened in 2019, as we completed construction on our brand new building. We are a small, family-owned facility, with one goal: making your pet feel at home while you are away.
                  Pine Bark sits on 10 beautiful acres nestled in the pines of Gratiot county. We believe that by remaining a small facility, we can provide loving one on one care for your furkids. 
                </p>
                <p>Where pets are family.</p>
            </div>
          </div>
          <div className="container-fluid container-secondary">
              <div className="container">
                <div className="row-fluid">
                  <div className="col text-center">
                    <h3>What can we do for your pet?</h3>
                    <Link href="/services">
                      <button className="btn btn-secondary">Services</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </Layout>

        <style type="text/css"> {
          `

          .employeeImg img {
            height: 300px;
            width: auto;
          }

          .employeeRow {
            min-height: 400px
          }

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