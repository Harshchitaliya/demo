import React from "react";
import styles from "./../styles/firstSection.module.css";

const FirstSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
        <div className={styles.logoMainDiv}>
                <div className={styles.logoDiv}>
                  <img
                    src="/logo.svg"
                    alt="logo"
                    className={styles.logo}
                    width="100%"
                  />
                </div>
              </div>
          <div className={styles.heading}>
            <div className={styles.main_heading}>
              <h2>Redefining Healthcare</h2>
            </div>
          </div>
          <div className={styles.all_images}>
            <div className={styles.main_image_container}>
              <div className={styles.thailand_svg}>
                <img src="./thai_miniSvg.svg" alt="thailand svg" />
              </div>
              <img
                className={styles.main_thailand_image}
                src="./Thailand Privilege.jpg"
                alt="Thailand Privilege"
              />
            </div>

            <div className={styles.sub_image_container}>
              <div className={styles.sub_image}>
                <div className={styles.svg}>
                  <img src="./pin_svg.svg" alt=" svg" />
                </div>
                <img src="./Privilege Image 1.jpg" alt="Thailand Privilege" />
              </div>

              <div className={styles.sub_image}>
                <div className={styles.svg}>
                  <img src="./pin_svg.svg" alt=" svg" />
                </div>
                <img src="./Privilege Image 2.jpg" alt="Thailand Privilege" />
              </div>

              <div className={styles.sub_image}>
                <div className={styles.svg}>
                  <img src="./pin_svg.svg" alt=" svg" />
                </div>
                <img src="./Privilege Image 3.jpg" alt="Thailand Privilege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
