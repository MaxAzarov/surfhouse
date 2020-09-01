import { gql } from "@apollo/client";

export const addItem = gql`
  mutation AddBasketItem($id: String!, $size: String!, $quantity: Int!) {
    AddBasketItem(id: $id, size: $size, quantity: $quantity) {
      quantity
      size
      id
      elementId {
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
        image
      }
    }
  }
`;
