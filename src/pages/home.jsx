import React from "react";

import NewsSection from "../components/newsSection";
import Testimonial from "../components/testimonial";
import Membership from "../components/membership";
import FourthSection from "../components/fourthSection";
import ThirdSection from "../components/thirdSection";
import FirstSection from "../components/firstSection";
import Test from "../components/test";

const Home = () => {
  return (
    <div>
      {/* <Test /> */}
      <FirstSection />
      <ThirdSection />
      <FourthSection />
      <Membership />
      <NewsSection />
      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
