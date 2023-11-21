import styles from "./styles.module.scss";

export const Link = ({ children, href }) => {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
};
