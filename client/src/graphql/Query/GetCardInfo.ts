import { gql } from "@apollo/client";

export const GetCard = gql`
  query GetCard($id: String!) {
    GetCardInfo(id: $id) {
      title
      newPrice
      productCode
      availability
      overview
      productDescription
      additionalInfo
      reviews
      productsTags
      size
    }
  }
`;
