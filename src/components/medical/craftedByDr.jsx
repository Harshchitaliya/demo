import React, { useEffect } from "react";
import styles from "./../../styles/medical/craftedByDr.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CraftedByDr = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_section}>
          <p className={styles.heading} data-aos="fade-right">
            CRAFTED BY DOCTORS
          </p>
          <hr className={styles.hr} data-aos="fade-right" />
          <p className={styles.text} data-aos="fade-right">
            Will it be possible?
            <br />
            If the leading doctors in the country will come together to
            co-design the hospital they would like to see in Thailand. Because
            some of the details of treatment are only deeply understood by
            specialists and know what is most important and safe for their
            patients.
          </p>
          <div className={styles.button_container} data-aos="fade-right">
            <button className={styles.button}>Read More</button>
          </div>
        </div>
        <div className={styles.right_section} data-aos="fade-left">
          <img
            src="./medical/medPark.png"
            alt="medipark"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};

export default CraftedByDr;
