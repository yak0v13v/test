"use client";

import { cn } from "@/shared/lib/cn";
import { Button } from "../button";
import { DropdownItem, DropdownItemProps } from "./dropdown-item";
import styles from "./dropdown.module.scss";
import { Fragment } from "react";
import { Divider } from "../divider";
import { useDropdown } from "@/shared/lib/use-dropdown";

type Props = {
  title: string;
  items?: Omit<DropdownItemProps, "close">[];
};

const Dropdown = ({ title, items }: Props) => {
  const { ref, isVisible, open, close } = useDropdown();
  const classes = cn(styles.container);

  return (
    <span className={classes} ref={ref}>
      <Button className={styles.button} onClick={open}>
        {title}
      </Button>
      {isVisible && (
        <div className={styles.list}>
          {items?.map((item) => (
            <Fragment key={item.value}>
              <DropdownItem {...item} close={close} />
              <Divider className={styles.divider} />
            </Fragment>
          ))}
        </div>
      )}
    </span>
  );
};

export { Dropdown };
