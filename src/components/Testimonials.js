// components/Testimonials.js
import styles from '../styles/Components/Testimonials.module.css';
import Image from 'next/image';
import Pic1 from '../public/images/testimonial1.jpeg'
import Pic2 from '../public/images/testimonial2.jpeg'
const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.h2}>Testimonials</div>
      <div className={styles.text}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</div>


      <div className={styles.testimonialCards}>
        <div className={styles.testimonialCard} style={{ left: '0px', opacity: '20%' }}>
          <div className={styles.start}>"</div>
          <div className={styles.text2} >Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</div>
          <div className={styles.end}>"</div>
          <div className={styles.name}>Name</div>
          <div className={styles.ceo}>CEO</div>
        </div>

        <div className={styles.testimonialCard}>
          <Image src={Pic1} alt="testimonial11.jpeg" className={styles.img}></Image>
          <div className={styles.start}>"</div>
          <div className={styles.text2} >Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</div>
          <div className={styles.end}>"</div>
          <div className={styles.name}>Name</div>
          <div className={styles.ceo}>CEO</div>
        </div>

        <div className={styles.testimonialCard} style={{ left: '2298px', opacity: '20%'}}>
          <Image src={Pic2} alt="testimonial12.jpeg" className={styles.img}></Image>
          <div className={styles.start}>"</div>
          <div className={styles.text2} >Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</div>
          <div className={styles.end}>"</div>
          <div className={styles.name}>Name</div>
          <div className={styles.ceo}>CEO</div>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={styles.subbar}></div>
        <div className={styles.subbar} style={{backgroundColor:'#ff6600'}}></div>
        <div className={styles.subbar}></div>
        <div className={styles.subbar}></div>
      </div>
    </section>
  );
};

export default Testimonials;
