export type ExchangeEntity = {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
};

export type ExchangeDetailEntity = {
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  trust_score_rank: number;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
};
