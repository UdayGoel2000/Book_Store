import React, { useState } from "react";
import styles from "./BookSection.module.css";
import BookCard from "../BookCard/BookCard";
import BookDetailsView from "../BookDetailsView/BookDetailsView";

const BookSection = ({ title, data, cart, handleAddToCart }) => {
  const [bookDetailViewId, setBookDetailViewId] = useState(0);
  const [bookDetailViewClick, setBookDetailViewClick] = useState(false);
  return (
    <>
      <div className={styles.mainWrapper}>
        <hr />
        <h1 className={styles.title}>{title}</h1>
        <hr />
        <div className={styles.wrapper}>
          {data?.map((ele) => (
            <BookCard
              key={ele.id}
              bookData={ele}
              setBookDetailViewId={setBookDetailViewId}
              setBookDetailViewClick={setBookDetailViewClick}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      {bookDetailViewClick ? (
        <BookDetailsView
          detailData={
            data?.filter((ele) => Number(ele.id) === bookDetailViewId)[0]
          }
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default BookSection;
