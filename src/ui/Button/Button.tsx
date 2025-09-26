import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.props";
import cn from "classnames";

function Button({
  children,
  className,
  variant = "accent",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles["button"],
        variant === "accent"
          ? styles["button--accent"]
          : styles["button--stroked"],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
