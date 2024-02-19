import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./../../styles/newsSection.module.css";
import { MdWatchLater } from "react-icons/md";

const data = [
  {
    event: "Event",
    time: "1 Hour Ago",
    imgUrl: "./News, Events &  PRomotion-1.png",
    description: "Exclusive airport lounge for members now open",
  },
  {
    event: "Event",
    time: "1 Hour Ago",
    imgUrl: "./News, Events &  PRomotion-2.png",
    description: "New countries added to privilege visa list.",
  },
  {
    event: "Event",
    time: "1 Hour Ago",
    imgUrl: "./News, Events &  PRomotion-3.png",
    description: "Collaboration with top hospitals announced",
  },
  {
    event: "Event",
    time: "1 Hour Ago",
    imgUrl: "./News, Events &  PRomotion-4.jpg",
    description: "Recap of our annual members' golf tournament.",
  },
];

const NewsSlider = () => {
  const [showPrevArrow, setShowPrevArrow] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: () => setShowPrevArrow(true),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.news_section}id="news_slider">
        <Slider {...settings}>
          {data.length > 0 &&
            data.map((item) => {
              return (
                <>
                  <div className={styles.news_continent}>
                    <div className={styles.thai_svg}>
                      <img src="./thailand_svg.svg" alt="thailand svg" />
                    </div>

                    <div className={styles.event_time}>
                      <div>
                        <p className={styles.event_text}>Event</p>
                      </div>
                      <div className={styles.time_text}>
                        <MdWatchLater />
                        <p className={styles.time}>1 Hour Ago</p>
                      </div>
                    </div>
                    <div className={styles.news_image}>
                      <img
                        src={item.imgUrl}
                        alt="promotion image"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className={styles.news_text}>
                      Exclusive airport lounge for members now open
                    </p>
                    <hr className={styles.news_hr} />
                    <div className={styles.button_container}>
                      <button className={styles.button}>Read More</button>
                    </div>
                  </div>
                </>
              );
            })}
        </Slider>
      </div>
    </>
  );
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: `linear-gradient(101deg, #ac8d71 0%, #fce7cf 50.5%, #d7bea0 100%)`,
          padding: "3px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${showPrevArrow ? "" : "hidden"}`}
        style={{
          ...style,
          display: "block",
          // background: `linear-gradient(101deg, #ac8d71 0%, #fce7cf 50.5%, #d7bea0 100%)`,
          padding: "3px",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
};

export default NewsSlider;
