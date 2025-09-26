import type { FooterColumn as FooterColumnType } from "@/constants/footerData";
import styles from "./Footer.module.css";

interface FooterColumnTypeProps {
  column: FooterColumnType;
}

const FooterColumn = ({column}: FooterColumnTypeProps) => {
	return <div className={styles["footer__col"]}>
      <span className={styles["footer__label"]}>{column.title}</span>

      <div className={styles["footer__list-wrap"]}>

      {column?.groups?.map((group, idx) =>
        group ? (
          <ul key={group.id}>
            {group.map(({ label, href }) => (
              <li key={label.id}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ) : null
      )}
      </div>
    </div>
}

export default FooterColumn
