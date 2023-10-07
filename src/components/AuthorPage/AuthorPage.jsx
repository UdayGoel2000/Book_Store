import React, { useState } from "react";
import styles from "./AuthorPage.module.css";
import Navbar from "../Navbar/Navbar";
import AuthorCard from "../AuthorCard/AuthorCard";

const AuthorPage = ({ bookData, authorData }) => {
  const [authorDetailViewId, setAuthorDetailViewId] = useState(0);
  const [authorDetailViewClick, setAuthorDetailViewClick] = useState(false);
  return (
    <div>
      <Navbar />
      <div className={styles.mainWrapper}>
        <hr />
        <h1 className={styles.title}>{"Authors"}</h1>
        <hr />
        {authorData.map((ele) => (
          <AuthorCard
            key={ele.id}
            authorData={authorData}
            setAuthorDetailViewId={setAuthorDetailViewId}
            setAuthorDetailViewClick={setAuthorDetailViewClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
