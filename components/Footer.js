import NavButton from "./NavButton";
// import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Social from "./Social"
import { attributes } from '../content/settings.md';

const Footer = props => {
    let { socialmedia } = attributes
    return (
    <>
    <div className="tree-row">
        <div className="tree">
            <img src="./assets/icons/tree_sm.svg"></img>
        </div>
        <div className="tree1">
            <img src="./assets/icons/tree_md.svg"></img>
        </div>
        <div className="tree2">
            <img src="./assets/icons/tree_lg.svg"></img>
        </div>
        <div className="tree3">
            <img src="./assets/icons/tree_sm.svg"></img>
        </div>
        <div className="tree3">
            <img src="./assets/icons/tree_md.svg"></img>
        </div>
        <div className="tree3">
            <img src="./assets/icons/tree_lg.svg"></img>
        </div>
        <div className="tree1 d-none d-sm-block">
            <img src="./assets/icons/tree_md.svg"></img>
        </div>
        <div className="tree1 d-none d-sm-block">
            <img src="./assets/icons/tree_lg.svg"></img>
        </div>
        <div className="tree2">
            <img src="./assets/icons/tree_sm.svg"></img>
        </div>
        <div className="tree3 d-none d-sm-block">
            <img src="./assets/icons/tree_md.svg"></img>
        </div>
        <div className="tree2 d-none d-sm-block">
            <img src="./assets/icons/tree_md.svg"></img>
        </div>
        <div className="tree d-none d-sm-block">
            <img src="./assets/icons/tree_sm.svg"></img>
        </div>
    </div>
    <div className="footer">
        <div className="container-fluid px-5">
            <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3 ">
                        <div className="row justify-content-center my-3">
                            <p>
                            <Social dark facebook={{url: socialmedia.facebook}}
                                         twitter={{url: socialmedia.twitter}}
                                         instagram={{url: socialmedia.instagram}}
                        />
                            </p>
                        </div>
                        <div className="row justify-content-center my-3">
                            <div>
                                <img id="ppbc_img" src="./assets/ppbc_logo.jpg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 my-3 mx-4 mx-sm-0">
                        <div className="row">
                            <p>Hours:<br/>
                                Mon-Sat 8:00am - 6:00pm<br/>
                                Sun 8:00am - 4:00pm</p>
                            </div>
                            
                        <div className="row">
                            <address>
                            <p>
                                Pine Bark Boarding and Grooming<br/>
                         
                            <a href="maps:https://maps.google.com/?q=8225+N+Woodbridge+Rd+Wheeler,+MI">8225 N Woodbridge Rd.<br/>
                            Wheeler, MI 48662</a>
                            </p>
                       
                            <p>
                            <a href="tel:989-948-4714">(989) 948-4714</a>
                            </p>
                            <p>
                            <a href="mail:pinebarkboarding@gmail.com">PineBarkBoarding@Gmail.com</a>
                            </p>
                            </address>
                        </div>
                       
                    </div>
                    <div className="col-12 col-lg-6 my-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13456.07649118908!2d-84.41776522622241!3d43.41343622187014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88223700a836a093%3A0xa957406657c7ef83!2sPine%20Bark%20Boarding!5e0!3m2!1sen!2sus!4v1612041867683!5m2!1sen!2sus" width="100%" height="250vh"  aria-hidden="false" ></iframe>
                    </div>
            </div>
            <div className="row-fluid">
                <Navbar expand="lg" className="py-5 navbar-footer d-flex justify-content-center">
                    <Nav className="mx-auto">
                        {props.navButtons.map(button => (
                        <div key={button.path}>
                            <NavButton path={button.path} label={button.label} icon={button.icon} />
                        </div>
                        ))}
                    </Nav>

                </Navbar>
            </div>
            <div className="row-fluid">
                <div className="d-flex justify-content-center py-2 copyright">
                    Copyright { year } { props.siteTitle }
                </div>
            </div>
        </div>

    </div>
    <style type="text/css"> {`

    .tree-row {
        display: flex;
        justify-content: center;
        overflow: hidden;
        margin-bottom: -2px;
    }

    .tree1 {
        margin-left: -50px;
    }

    .tree2 {
        margin-left: -80px;
    }

    .tree3 {
        margin-left: -100px;
    }

    .navbar-footer  {
        background-color: var(--black-ch);
        color: white;
    }

    .copyright {
        color: var(--white-ch);
    }

    .footer {
        color: var(--white-ch);
        font-family: var(--font-secondary)
    }

    #ppbc_img {
        height: auto;
        width: 100%;
        max-width: 150px;
    }


    `}</style>
    </>
    )};

let year = new Date().getFullYear();

export default Footer;