import { gql } from "@apollo/client";

export const newCardsQuery = gql`
  query {
    getNewCards {
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
