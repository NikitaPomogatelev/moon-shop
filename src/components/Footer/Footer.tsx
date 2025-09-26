import { footerColumns } from "../../constants/footerData";
import Button from "../../ui/Button/Button";
import LogoIcon from "../Icon/LogoIcon";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import styles from "./Footer.module.css";
import cn from "classnames";
import FooterColumn from "./FooterColumn";

const socials = [
  { id: 1, title: "Инстаграм", imageUrl: "/socials/im.svg" },
  { id: 2, title: "Вотсапп", imageUrl: "/socials/wa.svg" },
  { id: 3, title: "Телеграм", imageUrl: "/socials/tg.svg" },
];

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer__inner"]}>
          <div className={styles["footer__left"]}>
            <div className={styles["footer__logo"]}>
              <LogoIcon />
            </div>
            <span className={styles["footer__text"]}>
              Бесплатное приложение для онлайн записи
            </span>
            <Button className={styles["footer__btn"]}>Создать профиль</Button>
          </div>

          <div className={styles["footer__right"]}>
            {footerColumns.map((col) => (
              <FooterColumn key={col.id} column={col} />
            ))}
          </div>
        </div>

				<div className={styles["footer__bottom"]}>
					<span className={styles["footer__copy"]}>&copy;Moon 2025. All rights reserved. <a href="http://" target="_blank" rel="noopener noreferrer">Политика безопасности</a></span>
					<ul className={styles["footer__socials"]}>
						{socials && socials.map((s) => (
              <li key={s.id}><a href="#" target="_blank" aria-label={s.title} rel="noopener noreferrer"> 
                <img src={s.imageUrl} width={26} height={26} alt={s.title} />
                </a></li>
            ))}
					</ul>
				</div>
      </div>
    </footer>
  );
};

export default Footer;
