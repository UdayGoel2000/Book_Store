import React, { useState } from "react";
import styles from "./AuthorPage.module.css";
import Navbar from "../Navbar/Navbar";
import AuthorCard from "../AuthorCard/AuthorCard";
import AuthorDetailView from "../AuthorDetailView/AuthorDetailView";

const AuthorPage = ({ bookData, cart, authorData }) => {
  const [authorDetailViewId, setAuthorDetailViewId] = useState("");
  const [authorDetailViewClick, setAuthorDetailViewClick] = useState(false);
  return (
    <div>
      <Navbar
        count={cart
          ?.map((ele) => Number(ele.itemQty))
          .reduce((a, c) => a + c, 0)}
      />
      <div className={styles.mainWrapper}>
        <hr />
        <h1 className={styles.title}>{"Authors"}</h1>
        <hr />
        <div className={styles.wrapper}>
          {authorData.map((ele) => (
            <AuthorCard
              key={ele.id}
              authorData={ele}
              setAuthorDetailViewId={setAuthorDetailViewId}
              setAuthorDetailViewClick={setAuthorDetailViewClick}
            />
          ))}
        </div>
      </div>
      {authorDetailViewClick ? (
        <AuthorDetailView
          bookNameArray={bookData
            .filter((item) => {
              const authorDetails = authorData?.filter(
                (ele) => ele.id === authorDetailViewId
              )[0];
              return item.author === authorDetails?.name;
            })
            .map((item) => item.name)}
          detailData={
            authorData?.filter((ele) => ele.id === authorDetailViewId)[0]
          }
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AuthorPage;
