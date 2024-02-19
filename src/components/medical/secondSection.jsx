import React, { useEffect } from "react";
import styles from "./../../styles/medical/secondSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration
    });
  }, []);
  const svg = (
    <svg
      width="58"
      height="47"
      viewBox="0 0 58 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.8483 21.9792L46.8494 22.0016L47.2277 30.2454C47.375 33.3601 44.9643 36.0112 41.8607 36.1548L31.0809 36.6536C30.0317 36.6382 28.9858 36.693 27.9838 36.8002C26.106 36.9894 24.3475 37.3458 22.8705 37.7244C23.1097 36.2133 23.301 34.4262 23.3185 32.532L23.1745 29.4203L22.6705 18.5981C22.6008 17.0917 23.1234 15.6442 24.136 14.5259C25.1487 13.4108 26.5364 12.7549 28.0374 12.6855L36.2509 12.3022C36.2542 12.3052 36.2542 12.3052 36.2542 12.3052L36.2795 12.3008L36.1815 9.21898L27.8947 9.60247C25.5702 9.71005 23.4309 10.7206 21.8632 12.4467C20.2956 14.1727 19.4906 16.4041 19.5986 18.737L19.9722 29.5653C19.9724 29.5685 19.9724 29.5685 19.9727 29.5749C20.1075 30.8352 20.1402 32.0938 20.1035 33.2981C20.1073 33.3107 20.1044 33.3172 20.1049 33.3268C20.0456 35.3509 19.7949 37.2335 19.5206 38.743C19.1431 40.8458 18.7136 42.2378 18.6859 42.3286C18.7703 42.2927 20.1116 41.7349 22.1657 41.1569C23.6319 40.75 25.4574 40.3265 27.4473 40.0809C27.4473 40.0809 27.4473 40.0809 27.4505 40.0807C28.6608 39.9288 29.9315 39.8444 31.2166 39.8617C31.2198 39.8615 31.2198 39.8615 31.2261 39.8612L42.0032 39.2346C44.3277 39.127 46.467 38.1165 48.0347 36.3904C49.6023 34.6643 50.4073 32.433 50.2993 30.1L49.9147 21.7894L46.8483 21.9792Z"
        fill="url(#paint0_linear_345_516)"
      />
      <path
        d="M56.1443 18.3479L55.6344 7.2605L54.4167 7.32006C52.3241 7.4137 50.4685 8.35672 49.1587 9.80221C47.8488 11.2445 47.0847 13.1861 47.1818 15.2861L47.4882 21.9053L42.5019 22.1328L42.5024 22.1424C40.1439 22.2739 37.9046 22.707 36.0907 23.1747C36.4086 21.161 36.6464 18.6553 36.4949 16.0717L36.5045 16.0712L36.3008 11.6702L42.8959 11.365C44.9881 11.265 46.8439 10.3251 48.1538 8.88283C49.4668 7.43719 50.2278 5.49576 50.1307 3.39895L50.074 2.17341L39.0272 2.68783C35.9556 2.83318 33.5753 5.45401 33.7178 8.53381L33.7552 9.34125C33.7552 9.34125 34.0294 16.851 34.0292 16.915C34.046 19.62 33.6882 22.1473 33.3243 23.9936C32.977 25.7847 32.6195 26.9431 32.5946 27.0242C32.6728 26.9918 33.7889 26.5275 35.5338 26.015C37.3163 25.488 39.762 24.9014 42.4183 24.6634C42.4246 24.6631 47.5978 24.3437 47.5978 24.3437L47.598 24.3469L47.601 24.3436L50.0368 24.2308L50.838 24.1906C52.3262 24.1217 53.7016 23.4759 54.7021 22.371C55.6997 21.2726 56.2134 19.8415 56.1443 18.3479ZM36.1845 9.22564L36.1471 8.41819C36.0669 6.68521 37.4072 5.20952 39.1369 5.12628L47.6049 4.7344C47.1597 7.02582 45.2025 8.80511 42.7796 8.92044L36.1845 9.22564ZM50.7219 21.7524L49.9208 21.7927L49.6144 15.1735C49.5051 12.7414 51.0895 10.6212 53.3217 9.96457L53.7118 18.4637C53.7507 19.3031 53.4598 20.1097 52.899 20.7305C52.3317 21.3485 51.5583 21.7137 50.7219 21.7524Z"
        fill="url(#paint1_linear_345_516)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_345_516"
          x1="12.2795"
          y1="50.482"
          x2="44.4057"
          y2="13.8308"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0722" stop-color="#723D1D" />
          <stop offset="0.3782" stop-color="#C9A551" />
          <stop offset="0.6744" stop-color="#FFE37B" />
          <stop offset="0.8398" stop-color="#C9A551" />
          <stop offset="1" stop-color="#723D1D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_345_516"
          x1="31.0913"
          y1="28.375"
          x2="62.2193"
          y2="-4.96669"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AD714D" />
          <stop offset="0.2115" stop-color="#C9A551" />
          <stop offset="0.27" stop-color="#DEBD61" />
          <stop offset="0.5479" stop-color="#FFE37B" />
          <stop offset="0.696" stop-color="#C9A551" />
          <stop offset="0.797" stop-color="#723D1D" />
        </linearGradient>
      </defs>
    </svg>
  );
  return (
    <>
      <div className={styles.container}>
        <p
          className={styles.main_text}

          // data-aos="fade-down"
        >
          We represent MedPark Hospital, Thailand worldwide. Our services are
          free for all medical visitors and patients.
          <br />
          Email us for help and support.
        </p>
        <div className={styles.inner_container}>
          <div
            className={styles.main_box}

            // data-aos="fade-up-right"
          >
            <div className={styles.svg_icon}>{svg}</div>
            <div className={styles.box_text}>
              Expert consultation guidance and make a doctor’s appoinment
            </div>
          </div>
          <div
            className={styles.main_box}

            // data-aos="fade-down-right"
          >
            <div className={styles.svg_icon}>{svg}</div>
            <div className={styles.box_text}>
              Find a Doctor and estimate treatment cost
            </div>
          </div>
          <div
            className={styles.main_box}

            // data-aos="fade-down-left"
          >
            <div className={styles.svg_icon}>{svg}</div>
            <div className={styles.box_text}>Contact Us anytime</div>
          </div>
          <div
            className={styles.main_box}

            // data-aos="fade-up-left"
          >
            <div className={styles.svg_icon}>{svg}</div>
            <div className={styles.box_text}>
              get your visitor guide by email
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
