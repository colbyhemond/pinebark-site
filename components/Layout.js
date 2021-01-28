import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './NavBar'
import Footer from './Footer'

import navButtons from '../config/buttons'

export const siteTitle = 'Pine Bark Boarding'

export default function Layout({ children, home, title }) {
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
  
        {/* <div className="social">
          <a href="">
            <img src="./assets/social/facebook.svg"></img>
          </a>
          <a href="">
            <img src="./assets/social/twitter.svg"></img>
          </a>
          <a href="">
            <img src="./assets/social/instagram.svg"></img>
          </a>
        </div> */}

        <main>{children}</main>
    
          <Footer navButtons={navButtons} className='body' siteTitle={ siteTitle } />
    
        </div>
        <style type="text/css"> {`

        .social {
            background-color: #ddd;
            color: black;
            text-align: center;
            padding: 10px 0;
          }

          .social img {
            max-height: 25px;
            margin: 0 15px;
            filter: drop-shadow(0px 3px 2px grey)
          }

          .social img:hover {
            filter: drop-shadow(0 0px 2px pink) saturate(2);
          }

          .site {
            box-shadow: 0 0 25px #555;
          }

        `}</style>
        </>
     )
}