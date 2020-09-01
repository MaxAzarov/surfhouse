import { Document } from "mongoose";
export interface ICard extends Document {
  title: string;
  newPrice: number;
  category: string;
  oldPrice: number;
  productCode: number;
  availability: boolean;
  overview: string;
  size: Array<string>;
  length: number;
  productDescription: string;
  additionalInfo: string;
  reviews: Array<string>;
  productsTags: Array<string>;
  image?: string;
  images?: Array<string>;
}

export interface ICardFetched {
  size: string;
  quantity: number;
  id: string;
  elementId: {
    title: string;
    newPrice: number;
    image: string;
    id: string;
    overview: string;
  };
}

export interface ICardItem extends Document {
  title: string;
  newPrice: number;
  category: string;
  oldPrice: number;
  productCode: number;
  availability: boolean;
  overview: string;
  size: Array<string>;
  length: number;
  productDescription: string;
  additionalInfo: string;
  reviews: Array<string>;
  productsTags: Array<string>;
  image?: string;
  images?: Array<string>;
  _id: string;
}
