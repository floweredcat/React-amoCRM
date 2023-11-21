import { Link } from "../../ui/link/Link";
import { LinksContainer } from "../linksContainer/LinksContainer";
import { SocialLinks } from "../socialLinks/SocialLinks";
import styles from "./styles.module.scss";

export const Footer = () => {
  const about = {
    title: "О компании",
    links: ["Партнёрская программа", "Вакансии"],
  };
  const menu = {
    title: "Меню",
    links: [
      "Расчёт стоимости",
      "Услуги",
      "Виджеты",
      "Интеграции",
      "Наши клиенты",
      "Благодарственные письма",
      "Кейсы",
      "Сертификаты",
      "Блог на Youtube",
      "Вопрос / Ответ",
    ],
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <LinksContainer title={about.title}>
          {about.links.map((link) => (
            <li key={link}>
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </LinksContainer>
        <LinksContainer title={menu.title}>
          {menu.links.map((link) => (
            <li key={link}>
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </LinksContainer>
        <LinksContainer title="Контакты">
          <li>
            <Link href="tel:+7 800 555-35-35">+7 800 555-35-35</Link>
          </li>
          <SocialLinks />
          <li>
            <Link href="https://yandex.ru/maps/-/CDe0iJmi">
              Москва, Путевой проезд 3с1, к 902
            </Link>
          </li>
        </LinksContainer>
      </div>
      <div className={styles.copyright}>
        <small>©WELBEX 2022. Все права защищены.</small>
        <small>
          <Link href="/policy">Политика конфиденциальности</Link>
        </small>
      </div>
    </footer>
  );
};
