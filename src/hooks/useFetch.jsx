import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

function useFetch(initialState, errorHandler) {
  const [bookData, setBookData] = useState(initialState);
  const [authorData, setAuthorData] = useState(initialState);

  useEffect(() => {
    const { books, author } = fetchData(errorHandler);
    setBookData(books);
    setAuthorData(author);
  }, []);

  return [bookData, authorData];
}

export default useFetch;
