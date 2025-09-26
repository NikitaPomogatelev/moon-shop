import styles from "./Label.module.css";
import cn from 'classnames'

interface ExpireLabelProps {
  expireDate?: string;
	className?: string;
}


const ExpireLabel = ({ expireDate, className }: ExpireLabelProps) => {
	return (
		expireDate ? (
    <span className={cn(styles["expire-label"], className)}>{expireDate}</span>
  ) : null
	)
}

export default ExpireLabel
