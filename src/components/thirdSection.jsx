import React, { useState } from "react";
import styles from "./../styles/thirdSection.module.css";

const textWithImages = [
  { text: "STAY", image: "./stay.jpg" },
  { text: "TRAVEL", image: "./tarvel.jpg" },
  { text: "LEISURE", image: "./LEISURE.jpg" },
  {
    text: "HEALTH & WELL-BEING",
    image: "./helth-welbing.jpg",
  },
  { text: "WEALTH", image: "./wealth.jpg" },
];
const ThirdSection = () => {
  const [hoveredText, setHoveredText] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(
    textWithImages[0].image
  );

  const handleTextHover = (text) => {
    if (text !== hoveredText) {
      setHoveredText(text);
      setBackgroundImage(
        textWithImages.find((item) => item.text === text)?.image ||
          textWithImages[0].image
      );
    }
  };

  return (
    <div
      className={styles.image_gallery}
      style={{
        backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 70%), rgb(0 0 0 / 50%)), url(${backgroundImage})`,
      }}
    >
      <p className={styles.privileges_heading}>PRIVILEGES</p>
      <hr className={styles.privileges_hr} />
      {textWithImages.length > 0 &&
        textWithImages.map((item) => {
          return (
            <div
              key={item.text}
              className={styles.gallery_item}
              onMouseEnter={() => handleTextHover(item.text)}
            >
              <p className={styles.privileges_text}>{item.text}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ThirdSection;
