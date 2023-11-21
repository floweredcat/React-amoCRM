import { Tab } from "../../ui/tab/Tab";
import styles from "./styles.module.scss";

export const Tabs = () => {
  const tabs = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"];
  return (
    <nav className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab key={tab} title={tab} />
      ))}
    </nav>
  );
};
