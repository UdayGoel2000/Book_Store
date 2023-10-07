import React, { useEffect, useRef } from "react";
import styles from "./AuthorCard.module.css";

const AuthorCard = ({
  authorData,
  setAuthorDetailViewId,
  setAuthorDetailViewClick,
}) => {
  const { id, name, imageUrl } = authorData;
  const ref = useRef(null);

  const handleOutSide = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setAuthorDetailViewClick(false);
    } else setAuthorDetailViewClick(true);
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
      onClick={() => setAuthorDetailViewId(id)}
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
      <h6 className={styles.authorName}>
        <b>{name}</b>
      </h6>
    </div>
  );
};

export default AuthorCard;
