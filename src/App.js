import React, { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import BookPage from "./components/BookPage/BookPage";
import AuthorPage from "./components/AuthorPage/AuthorPage";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [bookData, authorData] = useFetch([], (err) => console.log(err));
  const handleAddToCart = (id, qty) => {
    if (qty) {
      setCart((prevState) => {
        let found = false;
        let oldData = prevState.map((item) => {
          if (item.itemId === Number(id)) {
            found = true;
            return { ...item, itemQty: qty };
          } else return item;
        });
        if (!found) {
          return [...oldData, { itemId: Number(id), itemQty: qty }];
        } else return oldData;
      });
    } else {
      setCart((prevState) =>
        prevState.filter((item) => item.itemId !== Number(id))
      );
    }
  };
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              data={bookData}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/Books"
          element={
            <BookPage
              data={bookData}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/Author"
          element={
            <AuthorPage
              bookData={bookData}
              authorData={authorData}
              cart={cart}
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <Cart
              data={bookData}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
