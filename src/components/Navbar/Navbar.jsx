import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className={styles.logo}>Book Store</h1>
        </Link>
        <div className={styles.subWrapper}>
          <Link to="/Books" style={{ textDecoration: "none" }}>
            <p>Books</p>
          </Link>
          <Link to="/Author" style={{ textDecoration: "none" }}>
            <p>Author</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
