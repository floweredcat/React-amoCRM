import { Button } from "../../ui/button/Button";
import { RedBallContent } from "../../ui/redBallContent/RedBallContent";
import styles from "./styles.module.scss";

export const Content = () => {
  const cards = [
    { title: "Виджеты", text: "30 готовых решений" },
    { title: "Dashboard", text: "с показателями вашего бизнеса" },
    { title: "Skype Аудит", text: "отдела продаж и CRM системы" },
    { title: "35 дней", text: "использования CRM" },
  ];
  return (
    <section className={styles.content}>
      <div className={styles.info}>
        <h1>
          <span>Зарабатывайте больше </span>с WELBEX
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.contentContainer}>
        <h2>
          <span>Вместе с </span>
          БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ<span> мы дарим:</span>
        </h2>
        <div className={styles.cards}>
          {cards.map((card) => (
            <div className={styles.card} key={card.title}>
              <h3 id={card.title}>
                <span></span>
                {card.title}
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <Button />
      </div>
      <RedBallContent />
    </section>
  );
};
