import React, { useState } from "react";
import headerStyles from "./../../styles/header.module.css";
import { MdLocationPin } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import { VscTwitter } from "react-icons/vsc";
import { BsClockFill } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div>
          <div className={headerStyles.topHeaderMainDiv}>
            <div className={headerStyles.topHeaderAllInfo}>
              <div className={headerStyles.topHeaderAllInfoSubDiv}>
                <div className={headerStyles.addressesDiv}>
                  <div
                    className={`${headerStyles.topHeadericonDescriDiv} ${headerStyles.topHeaderLocationDiv}`}
                  >
                    <div className={headerStyles.topHeadericonDiv}>
                      <MdLocationPin className={headerStyles.topHeadericon} />
                    </div>
                    <div className={headerStyles.topHeaderParaDiv}>
                      <p className={headerStyles.topHeaderPara}>
                        40, City center, near thai mall, Thailand
                      </p>
                    </div>
                  </div>
                  <div className={headerStyles.topHeadericonDescriDiv}>
                    <div className={headerStyles.topHeadericonDiv}>
                      <VscMail className={headerStyles.topHeadericon} />
                    </div>
                    <div className={headerStyles.topHeaderParaDiv}>
                      <p className={headerStyles.topHeaderPara}>
                        needhelp@company.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className={headerStyles.topHeaderTimeDiv}>
                  <div className={headerStyles.topHeadericonDescriDiv}>
                    <div className={headerStyles.topHeadericonDiv}>
                      <BsClockFill
                        className={headerStyles.topHeaderClockicon}
                      />
                    </div>
                    <div className={headerStyles.topHeaderParaDiv}>
                      <p className={headerStyles.topHeaderPara}>
                        Mon to Sat:8:00am - 7:00pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={headerStyles.topHeaderTopDiv}>
              <div className={headerStyles.topHeaderAllSocialIconDiv}>
                <div>
                  <div className={headerStyles.topHeaderSocialIconDiv}>
                    <TfiLinkedin className={headerStyles.topHeaderSocialIcon} />
                  </div>
                </div>
                <div>
                  <div className={headerStyles.topHeaderSocialIconDiv}>
                    <VscTwitter className={headerStyles.topHeaderSocialIcon} />
                  </div>
                </div>
                <div>
                  <div className={headerStyles.topHeaderSocialIconDiv}>
                    <FaYoutube className={headerStyles.topHeaderSocialIcon} />
                  </div>
                </div>
                <div>
                  <div className={headerStyles.topHeaderSocialIconDiv}>
                    <FaFacebookF className={headerStyles.topHeaderSocialIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={headerStyles.headerTopDiv}>
          <div className={headerStyles.headerMainDiv}>
            <div className={headerStyles.logoAndLinks}>
              <div className={headerStyles.logoMainDiv}>
                <div className={headerStyles.logoDiv}>
                  <img
                    src="/logo.svg"
                    alt="logo"
                    className={headerStyles.logo}
                    width="100%"
                  />
                </div>
              </div>
              <div>
                <div className={headerStyles.links}>
                  <div className={headerStyles.linksDiv}>
                    <a className={headerStyles.link_style} href="/">
                      Thailand Privilege
                    </a>
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <a className={headerStyles.link_style} href="/services">
                      Membership Packages
                    </a>
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <a className={headerStyles.link_style} href="/medical">
                      MedPark Hospital
                    </a>
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <a className={headerStyles.link_style} href="/testimonial">
                      Tours & Hotels
                    </a>
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <a className={headerStyles.link_style} href="/contact">
                      About Us
                    </a>
                  </div>
                  <div className={headerStyles.linksDiv}>
                    <a className={headerStyles.link_style} href="/contact">
                      Contact
                    </a>
                  </div>
                  {/* <div
                    className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                  >
                    <a
                      className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                      href="/"
                    >
                      Get Membership
                    </a>
                  </div> */}
                  <div
                    className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                  >
                    <a
                      className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                      href="/"
                    >
                      Get Membership
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={headerStyles.thirdSection}>
              <div className={headerStyles.headerSearchIconDiv}>
                <IoSearchCircleSharp
                  className={headerStyles.headerSearchIcon}
                />
              </div>
              <div className={headerStyles.headerIconDiv}>
                <FaUserCircle className={headerStyles.headerIcon} />
              </div>
            </div>
          </div>
          <div className={headerStyles.responsiveDiv}>
          {isOpen && <div className={headerStyles.headerDrawerBackground}/>}

            <button
              className={`${headerStyles.openButton} ${
                isOpen ? headerStyles.hamburgerMenuDiv : ""
              } `}
              onClick={toggleDrawer}
            >
              <RxHamburgerMenu />
            </button>
            <div
              className={`${headerStyles.headerDrawer} ${
                isOpen ? headerStyles.open : ""
              }`}
            >
              <div className={headerStyles.headerDrawerContent}>
                <div>
                  <div className={headerStyles.links}>
                    <div className={headerStyles.linksDiv}>
                      <a className={headerStyles.link_style} href="/">
                        Thailand Privilege
                      </a>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <a className={headerStyles.link_style} href="/services">
                        Membership Packages
                      </a>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <a className={headerStyles.link_style} href="/medical">
                        MedPark Hospital
                      </a>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <a
                        className={headerStyles.link_style}
                        href="/testimonial"
                      >
                        Tours & Hotels
                      </a>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <a className={headerStyles.link_style} href="/contact">
                        About Us
                      </a>
                    </div>
                    <div className={headerStyles.linksDiv}>
                      <a className={headerStyles.link_style} href="/contact">
                        Contact
                      </a>
                    </div>
                    {/* <div
                    className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                  >
                    <a
                      className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                      href="/"
                    >
                      Get Membership
                    </a>
                  </div> */}
                    <div
                      className={`${headerStyles.linksDiv} ${headerStyles.headerBtnDiv}`}
                    >
                      <a
                        className={`${headerStyles.link_style} ${headerStyles.headerBtn}`}
                        href="/"
                      >
                        Get Membership
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={toggleDrawer}
                  className={headerStyles.closeButton}
                >
                  <RiCloseLine />
                </button>
              </div>
              
            </div>
            {/* <div className={headerStyles.thirdSection}>
              <div className={headerStyles.headerSearchIconDiv}>
                <IoSearchCircleSharp
                  className={headerStyles.headerSearchIcon}
                />
              </div>
              <div className={headerStyles.headerIconDiv}>
                <FaUserCircle className={headerStyles.headerIcon} />
              </div>
            </div> */}
            


          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
