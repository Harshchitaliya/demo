import React, { useEffect } from "react";
import styles from "./../styles/newsSection.module.css";
import { MdWatchLater } from "react-icons/md";
import NewsSlider from "./subComponents/newsSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <p className={styles.heading} data-aos="fade-down">
            NEWS, EVENTS<span className={styles.end_style}> &</span> PROMOTION
          </p>

          <hr className={styles.heading_hr} />
          <p className={styles.sub_heading} data-aos="fade-down">
            Latest Stories and Updates
          </p>
        </div>
        <NewsSlider />
      </div>
    </div>
  );
};

export default NewsSection;
