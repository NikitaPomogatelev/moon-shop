import styles from './Reviews.module.css';

interface ReviewsAuthorProps {
  name: string;
  role: string;
  avatarUrl: string;
}

const ReviewsAuthor = ({ name, role, avatarUrl }: ReviewsAuthorProps) => {
	return (
		<div className={styles["author"]}>
			<div className={styles["author__image"]}>
        <img src={avatarUrl} alt={`Аватарка: ${name}`} />
			</div>
      <div className={styles["author__name"]}>{name}</div>
      <div className={styles["author__role"]}>{role}</div>
      </div>
	)
}

export default ReviewsAuthor
