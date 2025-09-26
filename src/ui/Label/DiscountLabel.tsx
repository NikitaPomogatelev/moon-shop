import styles from "./Label.module.css";
import cn from 'classnames'

interface DiscountLabelProps {
  discount?: string;
  className?: string;
}

const DiscountLabel = ({ discount, className }: DiscountLabelProps) => {
  return discount ? (
    <span className={cn(styles["discount-label"], className)}>{discount}</span>
  ) : null;
};

export default DiscountLabel;
