import React from "react";
import styles from "./BookDetailsView.module.css";

const BookDetailsView = ({ detailData }) => {
  // const { name, imageUrl, author, genre, description } = detailData;
  return (
    <div className={styles.wrapper}>
      <img
        src={detailData?.imageUrl}
        alt={detailData?.name}
        style={{
          borderRadius: "10px",
          border: "1px solid white",
          marginLeft: "2rem",
        }}
      />
      <div className={styles.subWrapper}>
        <h1>{detailData?.name}</h1>
        <p>
          <b>By: </b>
          {detailData?.author}
        </p>
        <p>
          <b>Genre: </b>
          {detailData?.genre}
        </p>
        <p>{detailData?.description}</p>
      </div>
    </div>
  );
};

export default BookDetailsView;
