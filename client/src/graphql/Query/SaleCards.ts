import { gql } from "@apollo/client";

export const saleCardsQuery = gql`
  query {
    getSaleCards {
      title
      newPrice
      category
      oldPrice
      productCode
      availability
      overview
      size
      productDescription
      additionalInfo
      reviews
      productsTags
      id
    }
  }
`;
