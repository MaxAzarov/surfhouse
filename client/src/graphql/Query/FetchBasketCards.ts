import { gql } from "@apollo/client";

export const FetchBasketCards = gql`
  query {
    FetchBasketCards {
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
