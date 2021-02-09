import NavButton from "./NavButton";
import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"


const NavBar = props => (
  <Navbar className={styles.navbar} expand="lg">
    <Navbar.Brand href="" className="col-9 col-lg-12 text-center">
      <Link href="/">
        <img className={styles.logo} src={props.logoSrc} alt="logo"></img>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle className={styles.navbartoggler} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="">
      <Nav className="mx-auto">
        {/* {props.navButtons.map(button => (
        <div className={styles.button} key={button.path}>
          <NavButton path={button.path} label={button.label} icon={button.icon} />
        </div>
        ))} */}

        
        <div className={styles.button} >
          <NavButton path='/' label='Home' />
        </div>
        <div className={styles.button} >
          <NavButton path='/about' label='About' />
        </div>
        {/* <div className={styles.button} >
          <NavButton path='/services' label='Service' />
        </div> */}
        <NavDropdown title="Services" id="basic-nav-dropdown" className={styles.button}>
        <div className={styles.button} >
          <NavButton path='/boarding' label='Boarding' />
          </div>
          <div className={styles.button} >
          <NavButton path='/grooming' label='Grooming' />
          </div>
        </NavDropdown>
        <div className={styles.button} >
          <NavButton path='/faq' label='FAQ' />
        </div>
        <div className={styles.button} >
          <NavButton path='/contact' label='Contact' />
        </div>
        
     

      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default NavBar;