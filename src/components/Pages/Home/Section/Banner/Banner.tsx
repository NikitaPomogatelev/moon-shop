import Button from '../../../../../ui/Button/Button';
import styles from "./Banner.module.css";

const Banner = () => {
	return (
		<section className={styles['banner']}>
			<div className="container">
				<article className={styles['banner__card']}>
					<div className={styles['banner__content']}>
						<h2 className={styles['banner__title']}>Разместите свои услуги
в&nbsp;каталоге Moon</h2>
						<p className={styles['banner__descr']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do&nbsp;incididunt ut&nbsp;labore et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam, quis nostrud exercitation ullamco laboris.</p>

						<Button className={styles["banner__btn"]} >Узнать подробнее</Button>
					</div>

					<div className={styles['banner__image']}>
						<img src="/banner/banner@2x.png" alt="Изображение банера" width={363} height={430} />
					</div>
				</article>
			</div>
		</section>
	)
}

export default Banner
