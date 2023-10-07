import React, { useEffect, useState } from "react";
import styles from "./BookPage.module.css";
import BookSection from "../BookSection/BookSection";
import Navbar from "../Navbar/Navbar";

const BookPage = ({ data, cart, handleAddToCart }) => {
  const genreArray = ["Horror fiction", "Romance novel", "Domestic Fiction"];
  const authorArray = ["Harper Lee", "Charlotte Bronte", "Mark Twain"];
  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const handleGender = (e) => {
    e.target.checked
      ? setGenre((prevState) => [...prevState, e.target.value])
      : setGenre((prevState) =>
          prevState.filter((item) => item !== e.target.value)
        );
  };
  const handleAuthor = (e) => {
    e.target.checked
      ? setAuthor((prevState) => [...prevState, e.target.value])
      : setAuthor((prevState) =>
          prevState.filter((item) => item !== e.target.value)
        );
  };
  const filterFunction = () => {
    let newGenreData = [];
    let newAuthorData = [];
    if (genre?.length)
      newGenreData = data.filter((item) => genre.includes(item.genre));
    if (author?.length) {
      newAuthorData = data.filter((item) => author.includes(item.author));
    }
    if (newGenreData?.length || newAuthorData?.length) {
      setFilteredData([...new Set([...newGenreData, ...newAuthorData])]);
    } else {
      setFilteredData(data);
    }
  };
  useEffect(() => {
    filterFunction();
  }, [author, genre]);
  return (
    <div>
      <Navbar
        count={cart
          ?.map((ele) => Number(ele.itemQty))
          .reduce((a, c) => a + c, 0)}
      />
      <div className={styles.filterWrapper}>
        <div>
          <label htmlFor="genreFilter">Genre</label>
          <ul id="genreFilter">
            {genreArray.map((ele, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  name={ele}
                  value={ele}
                  id={`genre` + i}
                  checked={genre.includes(ele)}
                  onChange={(e) => handleGender(e)}
                />
                <label htmlFor={`genre` + i}>{ele}</label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label htmlFor="authorFilter">Author</label>
          <ul id="authorFilter">
            {authorArray.map((ele, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  name={ele}
                  value={ele}
                  id={`author` + i}
                  checked={author.includes(ele)}
                  onChange={(e) => handleAuthor(e)}
                />
                <label htmlFor={`author` + i}>{ele}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BookSection
        title={"Books"}
        data={filteredData}
        cart={cart}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default BookPage;
