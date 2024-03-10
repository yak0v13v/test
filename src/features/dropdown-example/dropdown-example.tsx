"use client";

import { Dropdown } from "@/shared/ui/dropdown";
import { useMemo, useState } from "react";

const DropdownExample = () => {
  const [current, setCurrent] = useState<string>("account");

  const onClickItem = (value: string) => {
    setCurrent(value);
  };

  const items = useMemo(
    () => [
      { title: "account", value: "account", onClick: onClickItem },
      { title: "wallet", value: "wallet", onClick: onClickItem },
      { title: "bonuses", value: "bonuses", onClick: onClickItem },
      { title: "bets", value: "bets", onClick: onClickItem },
      { title: "history", value: "history", onClick: onClickItem },
    ],
    []
  );

  return <Dropdown title={current} items={items} />;
};

export { DropdownExample };
