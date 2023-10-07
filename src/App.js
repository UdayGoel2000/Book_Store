import React, { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import BookPage from "./components/BookPage/BookPage";
import AuthorPage from "./components/AuthorPage/AuthorPage";

function App() {
  const [bookData, authorData] = useFetch([], (err) => console.log(err));
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage data={bookData} />} />
        <Route path="/Books" element={<BookPage data={bookData} />} />
        <Route
          path="/Author"
          element={<AuthorPage bookData={bookData} authorData={authorData} />}
        />
      </Routes>
    </>
  );
}

export default App;
