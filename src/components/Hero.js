// components/Hero.js
import styles from '../styles/Components/Hero.module.css';
import Image from "next/image";
import HeroImg from "../public/images/Hero.png"
import Facebook from "../public/images/facebook.svg"
import Twitter from "../public/images/twitter.svg"
import Instagram from "../public/images/instagram.svg"
import LinkedIn from "../public/images/linkedin.svg"




const Hero = () => {
  return (
    <section className={styles.hero}>
      
        <div className={styles.heroTextfirstline}>Hi I am <br></br><div className={styles.heroTextfirstlinesecond}>Muhammad Umair</div></div>
        <div className={styles.heroTextsecondline}>UI & UX <div className={styles.heroTextsecondlinesecond}>Designer</div></div>
        
      
      <div className={styles.herodescription}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</div>
      <a href="#contact" className={styles.hireMe}>Hire Me</a>
      <div className={styles.rect}></div>
      <div className={styles.heroImage}>
        <Image src={HeroImg} alt="Muhammad Umair" className={styles.HeroImg}/>
      </div>

      <div className={styles.icons}>
        <Image src={Facebook} alt="facebook"/>
        <Image src={Twitter} alt="Twitter"/>
        <Image src={Instagram} alt="Instagram"/>
        <Image src={LinkedIn} alt="LinkedIn"/>
      </div>
    </section>
  );
};

export default Hero;
