import { cn } from "@/shared/lib/cn";
import { Sofia_Sans } from "next/font/google";
import { DropdownExample } from "@/features/dropdown-example";
import styles from "./home.module.scss";

const sofia = Sofia_Sans({ weight: ["600"], subsets: ["latin"] });

function Home() {
  const classes = cn(styles.main, sofia.className);

  return (
    <main className={classes}>
      <DropdownExample />
    </main>
  );
}

export { Home };
