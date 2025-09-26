import styles from './CategoryCard.module.css';


interface CategoryCardProps {
	title: string, 
	imageUrl: string
}

const CategoryCard = ({title, imageUrl}: CategoryCardProps ) => {
	return (
		<article className={styles['category__card']} style={{ backgroundImage: `url(${imageUrl})` }}>
			<h3>{title}</h3>
		</article>
	)
}

export default CategoryCard
