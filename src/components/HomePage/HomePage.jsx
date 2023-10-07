import React from "react";
import Navbar from "../Navbar/Navbar";
import BookSection from "../BookSection/BookSection";
import HeroImage from "../HeroImage/HeroImage";

const HomePage = ({ data, cart, handleAddToCart }) => {
  return (
    <div>
      <Navbar
        count={cart
          ?.map((ele) => Number(ele.itemQty))
          .reduce((a, c) => a + c, 0)}
      />
      <HeroImage />
      <BookSection
        title={"Featured Books"}
        data={data.filter((ele) => Number(ele.id) <= 6)}
        cart={cart}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default HomePage;
