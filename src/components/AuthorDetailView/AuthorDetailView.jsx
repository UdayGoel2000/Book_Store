import React from "react";
import styles from "./AuthorDetailView.module.css";

const AuthorDetailView = ({ bookNameArray, detailData }) => {
  console.log(bookNameArray);
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
        <b>List of Books Written by him</b>
        <ol>
          {bookNameArray?.map((ele) => (
            <li>{ele}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AuthorDetailView;
