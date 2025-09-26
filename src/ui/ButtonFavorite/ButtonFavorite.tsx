import styles from "./ButtonFavorite.module.css";
import type { ButtonProps } from "./ButtonFavorite.props";
import cn from "classnames";

function ButtonFavorite({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles["btn-favorite"], className)}
      {...props}
    >
      <img
        src="/premium/heart.svg"
        width={24}
        height={24}
        alt="Иконка: избранное"
      />
    </button>
  );
}

export default ButtonFavorite;
