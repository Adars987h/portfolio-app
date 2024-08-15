import styles from '../styles/Components/Design.module.css';

export default function Design() {
    return (
        <section className={styles.design}>
            <div className={styles.title}>Lets Design Together</div>
            <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                Aliquet donec morbi convallis pretium.
            </div>
            <div className={styles.form}>
                <div className={styles.input}>
                    <div className={styles.text}>Enter Your Email</div>
                </div>
                <div className={styles.button}>
                    <div className={styles.text2}>Contact Me</div>
                </div>
            </div>
        </section>
    );
}
