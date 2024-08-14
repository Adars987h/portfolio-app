// components/Services.js
import styles from '../styles/Components/Services.module.css';
import UIUX from '../public/images/uiux.png'
import WEBD from '../public/images/webd.svg'
import APPD from '../public/images/appd.png'
import GRAPHICD from '../public/images/graphicd.svg'

import Image from 'next/image';
const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.heading}>
        <div className={styles.title}>Services</div>
        <div className={styles.p}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</div>
      </div>
      <div className={styles.serviceCards}>
        <div className={styles.serviceCard}>

          <Image src={UIUX} alt='uiux.png' className={styles.icon}></Image>
          <h3>UI/UX</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className={styles.serviceCard}>

          <Image src={WEBD} alt='uiux.svg' className={styles.icon} ></Image>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className={styles.serviceCard}>

          <Image src={APPD} alt='appd.png' className={styles.icon}></Image>
          <h3>App Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className={styles.serviceCard}>

          <Image src={GRAPHICD} alt='graphicd.svg' className={styles.icon}></Image>
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
