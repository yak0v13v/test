import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/cn";
import styles from "./button.module.scss";

interface Props extends ComponentProps<"button"> {}

const Button = ({ className, children, ...props }: Props) => {
  const classes = cn(styles.button, className);

  return (
    <button className={classes} {...props}>
      <div className={styles.content}>{children}</div>
    </button>
  );
};

export { Button };
