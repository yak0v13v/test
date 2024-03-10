export interface Game {
  title: string;
  uniq_seo_title: string;
  lines: number | null;
  ways: null;
  volatility_rating: null;
  hit_rate: null;
  payout: string;
  devices: ("mobile" | "desktop")[];
  provider: string;
  identifier: string;
  seo_title: string;
  currencies: Record<Currencies, Currency>;
  categories: string[];
  unfinished_games_for: unknown[];
}

type Currencies = "USD" | "BTC" | "LTC" | "ETH" | "FUN" | "USDT" | "XRP" | "DOG";

interface Currency {
  id: number;
  jackpot: null;
}
