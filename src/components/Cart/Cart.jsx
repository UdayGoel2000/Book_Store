import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navbar from "../Navbar/Navbar";

const Cart = ({ data, cart, handleAddToCart }) => {
  const [showCartData, setShowCartData] = useState([]);

  const fetchCartData = () => {
    setShowCartData(
      cart?.map((ele) => {
        let z = data?.filter((item) => Number(item.id) === ele?.itemId);
        return { ...z[0], ele, totalCost: z[0]?.price * ele.itemQty };
      })
    );
  };
  const handleDelete = (id) => {
    handleAddToCart(id, 0);
  };
  useEffect(() => {
    fetchCartData();
  }, [cart]);
  const QtyHandler = ({ id, qty, handleAddToCart }) => {
    return (
      <div className={styles.quantityBox}>
        <button onClick={() => handleAddToCart(id, qty - 1)}>-</button>
        <p>{qty}</p>
        <button onClick={() => handleAddToCart(id, qty + 1)}>+</button>
      </div>
    );
  };
  console.log(showCartData);
  return (
    <div>
      <Navbar
        count={cart
          ?.map((ele) => Number(ele.itemQty))
          .reduce((a, c) => a + c, 0)}
      />
      <div className={styles.mainWrapper}>
        <hr />
        <h1 className={styles.title}>{"Shopping Cart"}</h1>
        <hr />
        <div className={styles.cartDiv}>
          {showCartData.map((item) => (
            <div className={styles.cartItemCards}>
              <p>{item.name}</p>
              <p>Amount: {item.totalCost}</p>
              <QtyHandler
                id={item.id}
                qty={
                  [...cart].filter((ele) => {
                    if (ele.itemId === Number(item.id))
                      return Number(ele.itemQty);
                  })[0]?.itemQty
                }
                handleAddToCart={handleAddToCart}
              />
              <button
                id={item.id}
                className={styles.deleteButton}
                onClick={(e) => handleDelete(e.target.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        {cart?.length ? (
          <p className={styles.TotalCostDiv}>
            Total Cost: {showCartData.reduce((a, c) => a + c.totalCost, 0)}
          </p>
        ) : (
          <p>Cart is Empty for now. Continue Shopping...</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
