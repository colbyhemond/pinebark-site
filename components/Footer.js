import NavButton from "./NavButton";
import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Footer = props => (
    <div>
        
        <Navbar bg="light" expand="lg" className="py-5">
            <Nav className="mx-auto">
                {props.navButtons.map(button => (
                <div className={styles.button} key={button.path}>
                    <NavButton path={button.path} label={button.label} icon={button.icon} />
                </div>
                ))}
            </Nav>

        </Navbar>
        <div className="d-flex justify-content-center py-2">
            Copyright 2020 The Blended Bakery
        </div>
    
    </div>
);

export default Footer;