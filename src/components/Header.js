// components/Header.js
import styles from '../styles/Components/Header.module.css';
import Logo from "../public/images/logo.svg";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={Logo} alt="heyyy" className={styles.logoimg} />
                <div className={styles.logoname}>
                    M
                    <span>
                    umair
                    </span>
                </div>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a href="#" className={styles.downloadCv}>Download CV</a>
        </header>
    );
};

export default Header;
