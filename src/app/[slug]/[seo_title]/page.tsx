import { Game } from "@/pages/game";
import { fetchAllGames } from "@/pages/game/api/gameApi";

type Path = {
  slug: string;
  seo_title: string;
};

export async function generateStaticParams() {
  const games = await fetchAllGames();
  const paths: Path[] = [];

  games.forEach((game) => {
    paths.push({
      slug: game.provider,
      seo_title: game.seo_title,
    });

    game.categories.forEach((category) => {
      paths.push({
        slug: category,
        seo_title: game.seo_title,
      });
    });
  });

  return paths;
}

export const fetchCache = "force-cache";

export default Game;
