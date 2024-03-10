import { cn } from "@/shared/lib/cn";
import styles from "./dropdown-item.module.scss";
import { ArrowIcon } from "../arrow-icon";

export type DropdownItemProps = {
  title: string;
  value: string;
  className?: string;
  onClick?: (value: string) => void;
  close: VoidFunction;
};

const DropdownItem = ({ title, value, onClick, className, close }: DropdownItemProps) => {
  const classes = cn(styles.item, className);

  const onClickHandler = () => {
    onClick?.(value);
    close();
  };

  return (
    <div className={classes} onClick={onClickHandler}>
      <span className={styles.title}>{title}</span>
      <ArrowIcon className={styles.arrow} />
    </div>
  );
};

export { DropdownItem };
