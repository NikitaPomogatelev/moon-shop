import ReviewsAuthor from "./ReviewsAuthor";
import styles from "./Reviews.module.css";

interface ReviewItem {
  id: number;
  text: string;
  name: string;
  role: string;
  avatarUrl: string;
}

interface ReviewsCardProps {
  item: ReviewItem;
}

const ReviewsCard = ({ item }: ReviewsCardProps) => {
  return (
    <div className={styles["reviews__card"]}>
      <p className={styles["reviews__card-text"]}>{item.text}</p>
      <ReviewsAuthor
        name={item.name}
        role={item.role}
        avatarUrl={item.avatarUrl}
      />
    </div>
  );
};

export default ReviewsCard;
