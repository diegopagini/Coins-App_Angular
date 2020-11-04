export interface Coins {
  data: Array<CoinsData>;
}

export interface CoinsData {
  changePercent24Hr: number;
  id: string;
  marketCapUsd: number;
  maxSupply: number;
  name: string;
  priceUsd: number;
  rank: number;
  supply: number;
  symbol: string;
  volumeUsd24Hr: number;
  vwap24Hr: number;
}
