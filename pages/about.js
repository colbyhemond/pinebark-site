import Head from "next/head"
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
                { employees.map( employee => 
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
                )}
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