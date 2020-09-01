import { gql } from "@apollo/client";

export const topCardsQuery = gql`
  query {
    getTopCards {
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
