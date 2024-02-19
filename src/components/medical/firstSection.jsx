import React, { useEffect } from "react";
import styles from "./../../styles/medical/firstSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration
    });
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.heading}>
            <div className={styles.main_heading}>
              <h2 data-aos="fade-right">Redefining Healthcare</h2>
            </div>
            <div className={styles.sub_heading}>
              <h4 data-aos="fade-left">
                wecare: delivering exceptional free services for your well-being
              </h4>
            </div>
          </div>
          <div className={styles.medcare_image}>
            <img
              src="./medical/medPark_firstSection.png"
              alt="medcare image"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
