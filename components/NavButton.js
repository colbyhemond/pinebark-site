import Link from "next/link";

import styles from "./navbutton.module.css";

const NavButton = props => (
  <Link href={props.path}>
    <a className={styles.NavButton}>
      <div className={styles.Icon}>{props.icon}</div>
      <span className={styles.Label}>{props.label}</span>
    </a>
  </Link>
);

export default NavButton;