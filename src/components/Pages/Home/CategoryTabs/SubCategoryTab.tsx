import cn from "classnames";
import styles from "./CategoryTabs.module.css";

interface SubCategoryTabProps {
  label: string;
  anchor: string;
  isActive: boolean;
  onClick: () => void;
}

const SubCategoryTab = ({ label, isActive, onClick }: SubCategoryTabProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles["sub-tab"], { [styles["active"]]: isActive } )}
			type='button'
    >
      { label }
    </button>
  );
}

export default SubCategoryTab
