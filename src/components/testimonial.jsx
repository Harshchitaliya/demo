import React, { useEffect } from "react";
import styles from "../styles/testimonial.module.css";
import { GoStarFill } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.heading} data-aos="fade-down">
        MEMBERS TESTIMONIAL
      </p>
      <hr className={styles.heading_hr} />
      <p className={styles.sub_heading} data-aos="fade-down">
        Latest Stories and Updates
      </p>
      <div className={styles.reviewerTopMainDiv}>
        <div className={styles.reviewTopDiv}>
          <div data-aos="fade-right">
            <div className={styles.reviewerImgMainDiv}>
              <div className={styles.reviewerImgDiv}>
                <img
                  src="./TESTIMONIAL-1.png"
                  className={styles.reviewerImg}
                  width="100%"
                />
              </div>
            </div>
            <div className={styles.reviewMainDiv}>
              <div className={styles.starNameDiv}>
                <div className={styles.reviewRateDiv}>
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                </div>
                <div className={styles.reviewerNameMainDiv}>
                  <div className={styles.reviewerNameTopBlock}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="36"
                      viewBox="0 0 32 36"
                      fill="none"
                    >
                      <path d="M0.5 0.5L32 36H0.5V0.5Z" fill="#DABA96" />
                    </svg>
                  </div>
                  <div className={styles.reviewerNameDiv}>
                    <div>
                      <h2 className={styles.reviewerName}>Jacob Jones</h2>
                      <p className={styles.reviewerPost}>TOURIST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className={styles.review}>
                  "Living in Thailand has granted me the privilege of
                  experiencing a culture so rich and diverse. The warm
                  hospitality, coupled with stunning landscapes, makes every day
                  a unique and enriching journey."
                </p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="41"
                viewBox="0 0 84 41"
                fill="none"
              >
                <path d="M0 40.5L83.5 0H0V40.5Z" fill="#E2E1E1" />
              </svg>
            </div>
          </div>
          <div data-aos="fade-down">
            <div className={styles.reviewerImgMainDiv}>
              <div className={styles.reviewerImgDiv}>
                <img
                  src="./TESTIMONIAL-2.png"
                  className={styles.reviewerImg}
                  width="100%"
                />
              </div>
            </div>
            <div className={styles.reviewMainDiv}>
              <div className={styles.starNameDiv}>
                <div className={styles.reviewRateDiv}>
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                </div>
                <div className={styles.reviewerNameMainDiv}>
                  <div className={styles.reviewerNameTopBlock}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="36"
                      viewBox="0 0 32 36"
                      fill="none"
                    >
                      <path d="M0.5 0.5L32 36H0.5V0.5Z" fill="#DABA96" />
                    </svg>
                  </div>
                  <div className={styles.reviewerNameDiv}>
                    <div>
                      <h2 className={styles.reviewerName}>Jacob Jones</h2>
                      <p className={styles.reviewerPost}>TOURIST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className={styles.review}>
                  "As an entrepreneur, the privileges of doing business in
                  Thailand are unparalleled. The supportive business environment
                  and access to a diverse market have significantly contributed
                  to the success of my ventures."
                </p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="41"
                viewBox="0 0 84 41"
                fill="none"
              >
                <path d="M0 40.5L83.5 0H0V40.5Z" fill="#E2E1E1" />
              </svg>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className={styles.reviewerImgMainDiv}>
              <div className={styles.reviewerImgDiv}>
                <img
                  src="./TESTIMONIAL-3.png"
                  className={styles.reviewerImg}
                  width="100%"
                />
              </div>
            </div>
            <div className={styles.reviewMainDiv}>
              <div className={styles.starNameDiv}>
                <div className={styles.reviewRateDiv}>
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                  <GoStarFill fill="#EFD9C0" className={styles.reviewRate} />
                </div>
                <div className={styles.reviewerNameMainDiv}>
                  <div className={styles.reviewerNameTopBlock}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="36"
                      viewBox="0 0 32 36"
                      fill="none"
                    >
                      <path d="M0.5 0.5L32 36H0.5V0.5Z" fill="#DABA96" />
                    </svg>
                  </div>
                  <div className={styles.reviewerNameDiv}>
                    <div>
                      <h2 className={styles.reviewerName}>Jacob Jones</h2>
                      <p className={styles.reviewerPost}>TOURIST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className={styles.review}>
                  "Being part of Thailand's expatriate community is a true
                  privilege. The blend of affordability, cultural richness, and
                  a welcoming atmosphere makes it a remarkable place to call
                  home. Truly, living here feels like living in paradise."
                </p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="41"
                viewBox="0 0 84 41"
                fill="none"
              >
                <path d="M0 40.5L83.5 0H0V40.5Z" fill="#E2E1E1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
