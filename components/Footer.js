import NavButton from "./NavButton";
// import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Social from "./Social"

const Footer = props => (
    <>
    <div className="tree-row">
        <div className="tree">
            <img src="./assets/tree_sm.svg"></img>
        </div>
        <div className="tree1">
            <img src="./assets/tree_md.svg"></img>
        </div>
        <div className="tree2">
            <img src="./assets/tree_lg.svg"></img>
        </div>
        <div className="tree3">
            <img src="./assets/tree_sm.svg"></img>
        </div>
        <div className="tree3">
            <img src="./assets/tree_md.svg"></img>
        </div>
        <div className="tree3">
            <img src="./assets/tree_lg.svg"></img>
        </div>
        <div className="tree1 d-none d-sm-block">
            <img src="./assets/tree_md.svg"></img>
        </div>
        <div className="tree1 d-none d-sm-block">
            <img src="./assets/tree_lg.svg"></img>
        </div>
        <div className="tree2">
            <img src="./assets/tree_sm.svg"></img>
        </div>
        <div className="tree3 d-none d-sm-block">
            <img src="./assets/tree_md.svg"></img>
        </div>
        <div className="tree2 d-none d-sm-block">
            <img src="./assets/tree_md.svg"></img>
        </div>
        <div className="tree d-none d-sm-block">
            <img src="./assets/tree_sm.svg"></img>
        </div>
    </div>
    <div className="footer">
        <div className="container">
            <div className="row-fluid">
                    <div className="col-6">
                        <div className="row">
                            <Social />
                        </div>
                        <div className="row">
                            <Social />
                        </div>
                    </div>
                    <div className="col-6">
                        <Social />
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


        {/*
        <Social />

        <Navbar expand="lg" className="py-5 navbar-footer">
            <Nav className="mx-auto">
                {props.navButtons.map(button => (
                <div key={button.path}>
                    <NavButton path={button.path} label={button.label} icon={button.icon} />
                </div>
                ))}
            </Nav>

        </Navbar>
        <div className="d-flex justify-content-center py-2 copyright">
            Copyright { year } { props.siteTitle }
        </div> */}

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


    `}</style>
    </>
);

let year = new Date().getFullYear();

export default Footer;