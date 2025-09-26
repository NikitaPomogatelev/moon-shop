import styles from "./Label.module.css";
import cn from 'classnames'

interface ViewsLabelProps {
  views?: number;
  className?: string;
}

const ViewsLabel = ({ views, className }: ViewsLabelProps) => {
  return views != null ? (
    <span className={cn(styles["views-label"], className)}>
      <img src="/images/views-icon.svg" alt="Иконка просмотров" />
      {views}
    </span>
  ) : null;
};

export default ViewsLabel;
