import React, { useEffect, useRef } from "react";
import styles from "./BookCard.module.css";

const BookCard = ({
  bookData,
  setBookDetailViewId,
  setBookDetailViewClick,
  cart,
  handleAddToCart,
}) => {
  const { id, name, imageUrl, author, price } = bookData;
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

  const AddToCartButton = ({ id, handleAddToCart }) => {
    return (
      <button
        className={styles.cartButton}
        id={id}
        onClick={(e) => handleAddToCart(e.target.id, 1)}
      >
        Add To Cart
      </button>
    );
  };
  const QtyHandler = ({ id, qty, handleAddToCart }) => {
    return (
      <div className={styles.quantityBox}>
        <button onClick={() => handleAddToCart(id, qty - 1)}>-</button>
        <p>{qty}</p>
        <button onClick={() => handleAddToCart(id, qty + 1)}>+</button>
      </div>
    );
  };

  return (
    <div>
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
        {/* <div className={styles.cardContent}> */}
        <div className={styles.bookContent}>
          <h6>
            <b>{name}</b>
          </h6>
          <h6>By: {author}</h6>
          <h6>Rs. {price}</h6>
        </div>
        {/* </div> */}
      </div>
      {cart?.map((ele) => Number(ele.itemId)).includes(Number(id)) ? (
        <QtyHandler
          id={id}
          qty={
            [...cart].filter((ele) => {
              if (ele.itemId === Number(id)) return Number(ele.itemQty);
            })[0]?.itemQty
          }
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <AddToCartButton id={id} handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default BookCard;
