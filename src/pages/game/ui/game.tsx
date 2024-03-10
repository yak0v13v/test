import { Container, Heading, Flex, Badge } from "@radix-ui/themes";
import { fetchAllGames } from "../api/gameApi";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./game.module.scss";

type Props = {
  params: {
    slug: string;
    seo_title: string;
  };
};

const Game = async ({ params: { seo_title } }: Props) => {
  const games = await fetchAllGames();
  const game = games.find((game) => game.seo_title === seo_title);

  if (!game) {
    return notFound();
  }

  return (
    <Container size="2">
      <Heading align="center">{game.title}</Heading>
      <Heading as="h3" align="center" size="4" color="gray">
        {game.provider}
      </Heading>

      <Flex mt="4" mb="4" justify="center" align="center" gap="2">
        {game.categories.map((category) => (
          <Badge key={category}>{category}</Badge>
        ))}
      </Flex>

      <Image
        src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`}
        width={300}
        height={300}
        alt={game.title}
        className={styles.image}
      />
    </Container>
  );
};

export { Game };
