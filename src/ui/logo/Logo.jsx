import styles from "./styles.module.scss";

import logo from "../../assets/logo_welbex.svg";

export const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="logo" className={styles.logo_img} />
      <p className={styles.logo_text}>
        Крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </a>
  );
};
