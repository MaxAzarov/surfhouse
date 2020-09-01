import { gql } from "@apollo/client";

export const FetchWishListCards = gql`
  query {
    FetchWishListCards {
      size
      quantity
      id
      elementId {
        title
        newPrice
        image
        overview
      }
    }
  }
`;
