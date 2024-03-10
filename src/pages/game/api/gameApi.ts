import { Game } from "@/shared/types/game";

export const fetchAllGames = (): Promise<Game[]> =>
  fetch("https://nextjs-test-pi-hazel-56.vercel.app/data/games.json", {
    cache: "force-cache",
  }).then((res) => res.json());
