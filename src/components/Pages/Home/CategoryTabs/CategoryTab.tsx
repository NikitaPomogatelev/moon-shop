import cn from "classnames";
import styles from "./CategoryTabs.module.css";

interface CategoryTabProps {
  label: string;
  anchor: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryTab = ({ label, anchor, isActive, onClick }: CategoryTabProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles["tab"], { [styles["active"]]: isActive }, { [styles["tab--more"]]: anchor === 'more' } )}
			type='button'
    >
      { label }
    </button>
  );
}

export default CategoryTab
