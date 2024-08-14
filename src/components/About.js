// components/About.js
import styles from '../styles/Components/About.module.css';
import Image from 'next/image';
import AboutImg from '../public/images/About.png'
const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.rightside}>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <label>UX</label>
            <div className={styles.progressConatiner}>
              <div className={styles.circle} style={{ position: 'absolute', left: '669px' }}></div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '685px' }}>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.skill}>
            <label>Website Design</label>
            <div className={styles.progressConatiner}>
              <div className={styles.circle} style={{ position: 'absolute', left: '637px' }}></div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '653px' }}>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.skill}>
            <label>App Design </label>
            <div className={styles.progressConatiner}>
              <div className={styles.circle} style={{ position: 'absolute', left: '701px' }}></div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '717px' }}>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.skill}>
            <label>Graphic Design </label>
            <div className={styles.progressConatiner}>
              <div className={styles.circle} style={{ position: 'absolute', left: '669px' }}></div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '685px' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.leftside}>
        <div className={styles.rect}></div>
        <Image src={AboutImg} alt="About.png" className={styles.AboutImg} />
      </div>
    </section>
  );
};

export default About;
