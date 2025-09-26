import styles from "./Label.module.css";
import cn from 'classnames'

interface VipLabelProps {
  label?: string;
  className?: string;
}

const VipLabel = ({ label, className }: VipLabelProps) => {
  return label ? (
    <span className={cn(styles["label-vip"], className)}>VIP</span>
  ) : null;
};

export default VipLabel;
