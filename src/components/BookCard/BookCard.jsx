import React, { useEffect, useRef } from "react";
import styles from "./BookCard.module.css";

const BookCard = ({
  bookData,
  setBookDetailViewId,
  setBookDetailViewClick,
}) => {
  const { id, name, imageUrl, author } = bookData;
  const ref = useRef(null);

  const handleOutSide = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setBookDetailViewClick(false);
    } else setBookDetailViewClick(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSide, true);
    return () => {
      document.removeEventListener("click", handleOutSide, true);
    };
  });
  return (
    <div
      ref={ref}
      className={styles.wrapper}
      onClick={() => setBookDetailViewId(Number(id))}
    >
      <img
        src={imageUrl}
        alt={name}
        width={159}
        height={190}
        style={{
          borderRadius: "10px",
          borderBottomRightRadius: "0",
          borderBottomLeftRadius: "0",
          border: "1px solid black",
        }}
      />
      <div className={styles.cardContent}>
        <div className={styles.bookContent}>
          <h6>
            <b>{name}</b>
          </h6>
          <h6>By: {author}</h6>
        </div>
        <button className={styles.cartButton}>Add To Cart</button>
      </div>
    </div>
  );
};

export default BookCard;
