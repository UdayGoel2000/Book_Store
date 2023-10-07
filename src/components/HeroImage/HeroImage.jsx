import React from "react";
import styles from "./HeroImage.module.css";
import bookHeroImage from "../../assets/bookHeroImage.png";

const HeroImage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <p className={styles.hero_typography}>100 Thousand Books, Step In</p>
        <p className={styles.hero_typography}>
          And Find your next Favourite Things
        </p>
      </div>
      <img
        className={styles.bookHeroImage}
        src={bookHeroImage}
        alt="bookHeroImage"
      />
    </div>
  );
};

export default HeroImage;
