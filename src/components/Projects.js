// components/Projects.js
import styles from '../styles/Components/Projects.module.css';
import Group25 from '../public/images/Group25.svg';
import Group26 from '../public/images/Group26.svg';
import Group27 from '../public/images/Group27.svg';

import Image from 'next/image';

const Projects = () => {
  return (
    <section className={styles.projects}>

      <div className={styles.heading}>My Projects</div>
      <div className={styles.headingtext}>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</div>

      <div className={styles.buttoncontainer}>
        <button style={{ marginRight: '15px' }}>All</button>
        <button>UI/UX</button>
        <button style={{ backgroundColor: '#fd6f00', color: 'white' }}>Web Design</button>
        <button>App Design</button>
        <button>Graphic Design</button>
      </div>

      <div className={styles.projectCards}>
        <div className={styles.projectCard}>
          <Image src={Group25} alt="Project 1" className={styles.img} />
          <h3>Web Design </h3>
          <p>AirCalling Landing Page Design </p>
        </div>
        <div className={styles.projectCard}>
          <Image src={Group26} alt="Project 2" />
          <h3>Web Design </h3>
          <p>Business Landing Page Design  </p>
        </div>
        <div className={styles.projectCard}>
          <Image src={Group27} alt="Project 3" />
          <h3>Web Design </h3>
          <p>Ecom Web Page Design  </p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
