import { cn } from "@/shared/lib/cn";
import styles from "./page.module.css";
import { Button } from "@/shared/ui/button";
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({ weight: ["600"], subsets: ["latin"] });

export default function Home() {
  const classes = cn(styles.main, sofia.className);

  return (
    <main className={classes}>
      <Button>ACCOUNT</Button>
    </main>
  );
}
