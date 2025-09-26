import styles from "./PopularCard.module.css";

interface PopularCardProps {
  title: string;
  imageUrl: string;
  timeOpen: string;
  address: string;
}

const PopularCard = ({
  title,
  address,
  timeOpen,
  imageUrl,
}: PopularCardProps) => {
  return (
    <article
      className={styles["popular__card"]}
    >
      <div className={styles["popular__card-image"]}>
        <img src={imageUrl} width={289} height={250} alt={title} />
      </div>
      <div className={styles["popular__card-content"]}>
        <h3>{title}</h3>
        <address>{address}</address>
        <span className={styles["popular__time"]}>{timeOpen}</span>
      </div>
    </article>
  );
};

export default PopularCard;
