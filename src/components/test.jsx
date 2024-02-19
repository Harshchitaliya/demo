import React, { useState } from "react";
import styles from "./../styles/test.module.css"; // Import your CSS module

const Test = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.background}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles["image-container"]} ${
          isHovered ? styles.zoomed : ""
        }`}
      />
      <div className={styles.content}>
        {isHovered ? "Hover Text" : "Initial Text"}
      </div>
    </div>
  );
};

export default Test;
