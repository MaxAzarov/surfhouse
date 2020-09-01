import { gql } from "@apollo/client";

export const GetLikedCards = gql`
  query {
    GetLikedCards {
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
