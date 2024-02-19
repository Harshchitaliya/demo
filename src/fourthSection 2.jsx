import React, { useEffect } from "react";
import styles from "./../styles/fourthSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FourthSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image_section}>
          <div className={styles.firstImageSection}>
            <img
              src="./Rectangle 16.png"
              className={styles.image1}
              data-aos="fade-right"
            />
            <img
              src="./Rectangle 17.png"
              className={styles.image2}
              data-aos="fade-right"
            />
          </div>
          <div className={styles.secondImageSection}>
            <img
              src="./Rectangle 15.png"
              className={styles.image3}
              data-aos="zoom-in-down"
            />
          </div>
        </div>
        <div className={styles.content_section}>
          <h2 className={styles.heading} data-aos="fade-left">
            EXPERIENCE THE THAILAND WITH OUR PRIVILEGES
          </h2>
          <hr className={styles.hr} data-aos="fade-left" />
          <p className={styles.description} data-aos="fade-left">
            There are many variations of privileges available, The warm tropical
            climate of Thailand is a significant attraction. While it may be
            humid at times, the generally pleasant weather allows for outdoor
            activities throughout the year.
          </p>
          <div className={styles.services}>
            <div className={styles.service}>
              <div className={styles.airportImgDiv} data-aos="flip-up">
                <div>
                  <img
                    src="./airport.png"
                    alt="Airport VIP Service"
                    className={styles.service_icon}
                    data-aos="zoom-in"
                  />
                </div>
                <h3 className={styles.service_title}>Airport VIP Service</h3>
              </div>
              {/* <hr className={styles.service_hr} /> */}
              <div className={styles.airportParaDiv}>
                <p className={styles.service_description} data-aos="fade-left">
                  Offers fast-track immigration and personal assistance at Thai
                  airports.
                </p>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.airportImgDiv} data-aos="flip-up">
                <div>
                  <img
                    src="./body-massage.png"
                    alt="Health & Spa Benefits"
                    className={styles.service_icon}
                    data-aos="zoom-in"
                  />
                </div>
                <h3 className={styles.service_title}>Health & Spa Benefits</h3>
              </div>
              {/* <hr className={styles.service_hr} /> */}
              <div className={styles.airportParaDiv}>
                <p className={styles.service_description} data-aos="fade-left">
                  Provides annual health check-ups and spa treatments in
                  Thailand.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className={styles.button} data-aos="zoom-in">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
