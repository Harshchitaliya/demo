import React from "react";
import styles from "./../../styles/footer.module.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerTopMainDiv}>
          <div className={styles.footerMainDiv}>
            <div className={styles.socialMediaAndBackToTop}>
              <div className={styles.socialMediaTextDiv}>
                <p className={styles.socialMedia}>Social Media:</p>
              </div>
              <div className={styles.socialMediaIconsMainDiv}>
                <div className={styles.socialMediaIconsDiv}>
                  <RiFacebookCircleFill
                    fill="#FFF"
                    className={styles.socialIcon}
                  />
                </div>
                <div className={styles.socialMediaIconsDiv}>
                  <FaInstagram fill="#FFF" className={styles.socialIcon} />
                </div>
                <div className={styles.socialMediaIconsDiv}>
                  <FaYoutube fill="#FFF" className={styles.socialIcon} />
                </div>
                <div className={styles.socialMediaIconsDiv}>
                  <FaFacebook fill="#FFF" className={styles.socialIcon} />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.backToTopDiv}>
                <IoIosArrowUp className={styles.backToTop} />
              </div>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerContactDetails}>
              <div className={styles.footerEmailDiv}>
                <p className={styles.email_text}>
                  Email for Assistance and Support
                </p>
                <p className={styles.footerEmail}>
                  consultants@goldenprivilege.com
                </p>
              </div>
              <div className={styles.footerVendorAgent}>
                <div className={styles.footerVendorIconDiv}>
                  <img
                    src="./footer/FOOTER-ICON-1.png"
                    className={styles.footerVendorIcon}
                  />
                </div>
                <div className={styles.footerVendorDiv}>
                  <p className={styles.footerVendorText}>For Vendors</p>
                </div>
              </div>
              <div className={styles.footerVendorAgent}>
                <div className={styles.footerVendorIconDiv}>
                  <img
                    src="./footer/FOOTER-ICON-2.png"
                    className={styles.footerVendorIcon}
                  />
                </div>
                <div className={styles.footerVendorDiv}>
                  <p className={styles.footerVendorText}>For Agents</p>
                </div>
              </div>
              <div className={styles.footerLogosMainDiv}>
                <div
                  className={`${styles.footerLogoDiv} ${styles.footerLogo1}`}
                >
                  <img
                    src="./footer/FOOTER-LOGO-1.png"
                    className={styles.footerLogo}
                    width="100%"
                  />
                </div>
                <div
                  className={`${styles.footerLogoDiv} ${styles.footerLogo2}`}
                >
                  <img
                    src="./footer/FOOTER-LOGO-2.png"
                    className={styles.footerLogo}
                    width="100%"
                  />
                </div>
                <div
                  className={`${styles.footerLogoDiv} ${styles.footerLogo3}`}
                >
                  <img
                    src="./footer/FOOTER-LOGO-3.png"
                    className={styles.footerLogo}
                    width="100%"
                  />
                </div>
              </div>
            </div>
            <div className={styles.footerLink1}>
              <div className={styles.footerTextDiv}>
                <h2 className={styles.footerHeading}>Privileges</h2>
                <p className={styles.footerText}>Stay</p>
                <p className={styles.footerText}>Travel</p>
                <p className={styles.footerText}> Leisure</p>
                <p className={styles.footerText}>Health & Well-being</p>
                <p className={styles.footerText}> Wealth</p>
              </div>
              <div className={styles.footerTextSubDiv}>
                <p className={styles.footerBoldText}>Why Thailand?</p>
                <p className={styles.footerBoldText}>News & Promotion</p>
                <p className={styles.footerBoldText}>Living in Thailand</p>
              </div>
            </div>
            <div className={styles.footerLink2}>
              <div className={styles.footerTextDiv}>
                <h2 className={styles.footerHeading}>Membership</h2>
                <p className={styles.footerText}>Reserve</p>
                <p className={styles.footerText}>Diamond</p>
                <p className={styles.footerText}>Platinum</p>
                <p className={styles.footerText}>Gold</p>
              </div>
              <div className={styles.footerTextSubDiv}>
                <p className={styles.footerBoldText}>Announcement</p>
                <p className={styles.footerBoldText}>Procurement</p>
                <p className={styles.footerBoldText}>Download</p>
              </div>
            </div>
            <div className={styles.footerLink3}>
              <div className={styles.footerTextDiv}>
                <h2 className={styles.footerHeading}>About</h2>
                <h2 className={styles.footerText}>Who we are?</h2>
                <p className={styles.footerText}>Corporate governance</p>
                <p className={styles.footerText}>Board of directors</p>
                <p className={styles.footerText}>Audit committees</p>
                <p className={styles.footerText}>Management team</p>
              </div>
              <div className={styles.footerTextSubDiv}>
                <p className={styles.footerBoldText}>Careers</p>
                <p className={styles.footerBoldText}>Contact us</p>
              </div>
            </div>
          </div>
          <div className={styles.copyrightLinksDiv}>
            <div>
              <p className={styles.copyrightText}>
                Copyright © 2024 The Crown Privileges |{" "}
                <a href="" className={styles.copyrightTextLink}>
                  Privacy Policy
                </a>
              </p>
            </div>
            <div>
              <p className={styles.copyrightText}>
                <a href="" className={styles.copyrightTextLink}>
                  Cookies Policy
                </a>
              </p>
            </div>
          </div>
          <div className={styles.footerGoldenTextDiv}>
            <h2 className={styles.footerGoldenText}>GOLDEN PRIVILEGES</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
