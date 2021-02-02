import NavButton from "./NavButton";
import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


const NavBar = props => (
  <Navbar className={styles.navbar} expand="lg">
    <Navbar.Brand href="" className="col-9 col-lg-12 text-center">
      <Link href="/">
        <img className={styles.logo} src={props.logoSrc}></img>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle className={styles.navbartoggler} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="">
      <Nav className="mx-auto">
        {props.navButtons.map(button => (
        <div className={styles.button} key={button.path}>
          <NavButton path={button.path} label={button.label} icon={button.icon} />
        </div>
        ))}

      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default NavBar;