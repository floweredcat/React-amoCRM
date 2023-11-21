import styles from "./styles.module.scss";
import { Tabs } from "../tabs/Tabs";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { Link } from "../../ui/link/Link";
import { Logo } from "../../ui/logo/Logo";
import { PurpleBall } from "../../ui/purpleBall/PurpleBall";
import { RedBall } from "../../ui/redBall/RedBall";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Tabs />
      <div className={styles.contacts}>
        <Link href="tel:+7 800 555-35-35">+7 800 555-35-35</Link>
        <SocialLinks />
      </div>
      <PurpleBall />
      <RedBall />
    </header>
  );
};
