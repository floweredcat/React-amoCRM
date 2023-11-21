import styles from "./styles.module.scss";

export const LinksContainer = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
};
