import styles from "./Rate.module.css";

interface RateProps {
 value: number; count: number;
}

const Rate = ({item}: { item: RateProps }) => {
  return (
    <div className={styles["card__rate-group"]}>
      <span className={styles["card__rate-icon"]}>
        <img src="/premium/star.svg" alt="Иконка рейтинга" />
      </span>{" "}
      <strong>{item.value}</strong>
      <span className={styles["card__rate-count"]}>({item.count})</span>
    </div>
  );
};

export default Rate;
