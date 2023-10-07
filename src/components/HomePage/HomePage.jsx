import React from "react";
import Navbar from "../Navbar/Navbar";
import BookSection from "../BookSection/BookSection";
import HeroImage from "../HeroImage/HeroImage";

const HomePage = ({ data }) => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <BookSection
        title={"Featured Books"}
        data={data.filter((ele) => Number(ele.id) <= 6)}
      />
    </div>
  );
};

export default HomePage;
