import styles from "./styles.module.scss";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import viber from "../../assets/viber.svg";
import { Link } from "../../ui/link/Link";
export const SocialLinks = () => {
  const socials = [telegram, viber, whatsapp];
  return (
    <div className={styles.contacts}>
      {socials.map((social) => (
        <Link href={social} key={social}>
          <img src={social} alt={social} className={styles.contacts_img} />
        </Link>
      ))}
    </div>
  );
};
