// components/Footer.js
import styles from '../styles/Components/Footer.module.css';
import Logo from "../public/images/logo.svg";
import Image from "next/image";
import Facebook from "../public/images/facebook.svg"
import Twitter from "../public/images/twitter.svg"
import Instagram from "../public/images/instagram.svg"
import LinkedIn from "../public/images/linkedin.svg"


const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo.svg" className={styles.logoimg} />
          <div className={styles.logoname}>
            M
            <span>
              umair
            </span>
          </div>
        </div>

        <div className={styles.buttonholder}>
          <div className={styles.button}>Home</div>
          <div className={styles.button}>About Me</div>
          <div className={styles.button}>Services</div>
          <div className={styles.button}>Projects</div>
          <div className={styles.button}>Testimonials</div>
          <div className={styles.button}>Contact</div>
        </div>


        <div className={styles.icons}>
        <Image src={Facebook} alt="facebook"/>
        <Image src={Twitter} alt="Twitter"/>
        <Image src={Instagram} alt="Instagram"/>
        <Image src={LinkedIn} alt="LinkedIn"/>
        </div>
      </div>
      <div className={styles.footerbottom}>
        <div className={styles.text}>© 2023 <span>Mumair</span> All Rights Reserved , Inc.</div>
      </div>
    </section>
  );
};

export default Footer;
