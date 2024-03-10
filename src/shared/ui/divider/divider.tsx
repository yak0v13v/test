import { cn } from "@/shared/lib/cn";
import styles from "./divider.module.scss";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  const classes = cn(styles.divider, className);

  return <div className={classes} />;
};

export { Divider };
