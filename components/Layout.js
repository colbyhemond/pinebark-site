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
    let { socialmedia } = attributes
    return (
        <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
          <meta name="description" content={ siteTitle } />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:image" content={`https://og-image.now.sh/${encodeURI( siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>{title} - { siteTitle }</title>
        </Head>
        <div className="mx-lg-5 site">

          <NavBar navButtons={navButtons} logoSrc='./assets/logo_black.svg' />
        
          <div className="container-fluid">
            <div className="row nav-contact text-center">
              {/* <div className="col-md-1 order-md-1">

              </div> */}
              <div className="col-5 col-sm-4 col-md-4 order-1 order-md-2">
                <span className="d-none d-sm-inline">Located in </span>Wheeler, MI
              </div>
              <div className="col-12 col-sm-4 col-md-4 order-12 order-md-3 py-2">
                <Social facebook={{url: socialmedia.facebook}}
                        // twitter={{url: socialmedia.facebook}}
                        // instagram={{url: socialmedia.facebook}}
                        />
              </div>
              <div className="col-7 col-sm-4 col-md-4 order-2 order-md-4">
                <a href="tel:989-948-4714">(989) 948-4714</a>
              </div>
              {/* <div className="col-md-1 order-md-5">

              </div> */}
            </div>
          </div>

          <main>{children}</main>

          <Footer navButtons={navButtons} className="footer" siteTitle={ siteTitle } />

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