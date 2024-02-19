import React, { useEffect, useState } from "react";
import styles from "../styles/membership.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: 1,
    imageUrl: "./card1.png",
    invitation: "By invitation only",
    title: "RESERVE",
    membershipFees: "THB 5,000,000",
    validity: "20 Years ++",
    points: "120 Points",
  },
  {
    id: 2,
    imageUrl: "./card2.png",
    invitation: "",
    title: "DIAMOND",
    membershipFees: "THB 2,500,000",
    validity: "15 Year",
    points: "55 Points",
  },
  {
    id: 3,
    imageUrl: "./card3.png",
    invitation: "",
    title: "PLATINUM",
    membershipFees: "THB 1,500,000",
    validity: "10 Year",
    points: "35 Points",
  },
  {
    id: 4,
    imageUrl: "./card4.png",
    invitation: "",
    title: "GOLD",
    membershipFees: "THB 900,000",
    validity: "5 Year",
    points: "20 Points",
  },
];

const Membership = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can customize the animation duration
    });
  }, []);
  const [activeCard, setActiveCard] = useState(cards[0].id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-25%", // Adjust this value to control the amount of partial visibility
    responsive: [
      {
        breakpoint: 1131,
        settings: {
          slidesToShow: 3,
          centerPadding: "-10%", // Adjust center padding for smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "-10%", // Adjust center padding for smaller screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "-10%", // Adjust center padding for smaller screens
        },
      },
    ],
  };
  
  
  const handleMouseEnter = (id) => {
    setActiveCard(id);
  };

  // No need for mouse leave on the container if you want to keep the last hovered image active

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.heading} data-aos="fade-down">
          EXPLORE OUR THAILAND PRIVILEGE CARD MEMBERSHIP PACAKAGES FOR A LIFE OF
          LUXURY IN THAILAND
        </p>
        <hr className={styles.heading_hr} />
        <p className={styles.sub_heading} data-aos="fade-down">
          Authorized Agent forThailand Privilege Visa Card Co in Partnership
          with Ministry of Tourism andSports (TAT)
        </p>
      </div>
      <div className={styles.membershipContainer}>

      {/* {window.innerWidth <= 1130 ? (
          <Slider {...settings}>
            {cards.map((card) => 
              {
                return(

              <div
                key={card.id}
                className={`${styles.membershipCard} ${
                  activeCard === card.id ? styles.active : ""
                }`}
                onMouseEnter={() => handleMouseEnter(card.id)}
              >

            {card.invitation ? (
              <p className={styles.invitation}>BY INVITATION ONLY</p>
            ) : (
              <p></p>
            )}

            <h3 className={styles.title}>{card.title}</h3>
            <div>

            <img src={card.imageUrl} alt={card.title} style={{width:"100%"}} />
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.membershipFees}>
                <span className={styles.card_span}>Membership Fees: </span>
                {card.membershipFees}
              </p>
              <p className={styles.membershipFees}>
                <span className={styles.card_span}> Validity: </span>
                {card.validity}
              </p>
              <p className={styles.membershipFees}>
                <span className={styles.card_span}>Privilege points: </span>
                {card.points}
              </p>
              <div>
                <hr className={styles.hr} />
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button}>Discover More</button>
            </div>
      </div>
                )

})}
          </Slider>)
          : */}
          {(cards.map((card) =>{
            
            return(
            <div
              key={card.id}
              className={`${styles.membershipCard} ${
                activeCard === card.id ? styles.active : ""
              }`}
              onMouseEnter={() => handleMouseEnter(card.id)}
            >
              {card.invitation ? (
                <p className={styles.invitation}>BY INVITATION ONLY</p>
              ) : (
                <p></p>
              )}
  
              <h3 className={styles.title}>{card.title}</h3>
              <img src={card.imageUrl} alt={card.title} />
              <div className={styles.cardInfo}>
                <p className={styles.membershipFees}>
                  <span className={styles.card_span}>Membership Fees: </span>
                  {card.membershipFees}
                </p>
                <p className={styles.membershipFees}>
                  <span className={styles.card_span}> Validity: </span>
                  {card.validity}
                </p>
                <p className={styles.membershipFees}>
                  <span className={styles.card_span}>Privilege points: </span>
                  {card.points}
                </p>
                <div>
                  <hr className={styles.hr} />
                </div>
              </div>
              <div className={styles.buttonDiv}>
                <button className={styles.button}>Discover More</button>
              </div>
            </div>
          )}))}
        
      </div>
    </div>
  );
};

export default Membership;
