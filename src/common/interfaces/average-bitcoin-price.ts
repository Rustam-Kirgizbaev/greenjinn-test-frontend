import { IProvider } from './provider';

export interface IAverageBitcoinPrice {
  ticker: string;
  average_price: number;
  providers: IProvider[];
}
