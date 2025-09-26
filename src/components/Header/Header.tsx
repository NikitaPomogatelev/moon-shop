
import Button from '../../ui/Button/Button';
import LogoIcon from '../Icon/LogoIcon';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import styles from './Header.module.css';

import cn from 'classnames';


const Header = () => {

	return (
		<header className={styles['header']}>
			<div className="container">
				<div className={styles['header__inner']}>
					<a href={'/'} className={styles['header__logo']}>
						<LogoIcon />
					</a>

					<div className={styles['header__right']}>
						<span className={styles['header__label']}>Для бизнеса</span>
						<LangSwitcher />
						<nav className={styles['header__btn-group']}>
							
						<Button >Регистрация</Button>
						<a className={styles['header__link-auth']} href="#" target="_blank" rel="noopener noreferrer">Войти</a>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
