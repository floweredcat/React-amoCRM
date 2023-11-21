import { Link } from "../link/Link";
import styles from "./styles.module.scss";

export const Tab = ({ title, link = "/" }) => {
  return (
    <li className={styles.tab}>
      <Link href={link}>{title}</Link>
    </li>
  );
};
