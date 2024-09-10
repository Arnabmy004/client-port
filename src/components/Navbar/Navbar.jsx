import React, { useState } from "react";
import {Link as ScrollLink} from "react-scroll"
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/">
        Available for Work
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li style={{cursor:"pointer"}}>
            <ScrollLink to="about" smooth={true} duration={300}>About</ScrollLink>
          </li>
          <li style={{cursor:"pointer"}}>
            <ScrollLink to="experience" smooth={true} duration={300} >Experience</ScrollLink>
          </li>
          <li style={{cursor:"pointer"}}>
          <ScrollLink to="projects" smooth={true} duration={300} >Projects</ScrollLink>
          </li>
          <li style={{cursor:"pointer"}}>
          <ScrollLink to="contact" smooth={true} duration={300} >Contact</ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
