import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './NavBar'
import Footer from './Footer'
import { attributes } from '../content/settings.md';

import navButtons from '../config/buttons'
import Social from './Social'

export const siteTitle = 'Pine Bark Boarding'

export default function Layout({ children, home, title }) {
    let { siteDescription, socialMedia, businessInfo } = attributes
    return (
        <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://maps.googleapis.com"/>
          <link rel="preload" href="./assets/logo_black.svg" as="image"></link>
          <link rel="preload" href="./assets/icons/dog_house.svg" as="image"></link>
          <link rel="preload" href="./assets/icons/bathtub.svg" as="image"></link>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
          <meta name="description" content={ siteDescription } />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:image" content="/assets/images/opengraph_img.png" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ch-pinebark.netlify.app" />
          <meta property="og:description" content={siteDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <script rel="preload" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>{title} - { siteTitle }</title>
          <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        </Head>
        <div className="mx-lg-5 site">

          <NavBar navButtons={navButtons} logoSrc='./assets/logo_black.svg' />
        
          <div className="container-fluid">
            <div className="row nav-contact text-center">
              {/* <div className="col-md-1 order-md-1">

              </div> */}
              <div className="col-5 col-sm-4 col-md-4 order-1 order-md-2">
                <a href="#location"><span className="d-none d-sm-inline">Located in </span>{businessInfo.city}, {businessInfo.state}</a>
              </div>
              <div className="col-12 col-sm-4 col-md-4 order-12 order-md-3 py-2">
                <Social facebook={{url: socialMedia.facebook}}
                        twitter={{url: socialMedia.twitter}}
                        instagram={{url: socialMedia.instagram}}
                        />
              </div>
              <div className="col-7 col-sm-4 col-md-4 order-2 order-md-4">
                <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
              </div>
              {/* <div className="col-md-1 order-md-5">

              </div> */}
            </div>
          </div>

          <main>{children}</main>

          <Footer navButtons={navButtons} className="footer" siteTitle={ siteTitle } />
          
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </div>

        <style type="text/css"> {`

          .site {
            box-shadow: 0 0 25px #555;
            background-color: var(--white-ch);
          }

          .nav-contact {
            display: flex;
            align-items: center;
            box-shadow: 0px 0px 10px #CCC ;
            min-height: 50px;
            padding: 10px 0;
          }

          main {
            margin: 5em 0;
          }

          .footer {
            background-color: var(--black-ch) !important;
            padding-top: 50px;
          }

        `}</style>
        </>
     )
}